'use strict';
const express = require('express');
const { authenticate } = require('../../middlewares/auth');
const { catchRequestError } = require('../../middlewares/validator');
const {
	createBooking,
	getBookings,
	getBookingById,
	deleteBookingById,
	validateCreateBookingSchema,
	getBookingsWithPagination,
} = require('../../services/bookings');
const { validatePagingQueries } = require('../../services/pagination');
const { getShowtimeById } = require('../../services/showtimes');
const { updateStatusOfTickets } = require('../../services/tickets');
const ApiError = require('../../utils/apiError');

const bookingRouter = express.Router();

bookingRouter.post(
	'/',
	[authenticate, validateCreateBookingSchema(), catchRequestError],
	async (req, res, next) => {
		const { showtimeId, tickets } = req.body;

		try {
			const showtime = await getShowtimeById(showtimeId);
			if (!showtime) {
				throw new ApiError(404, 'Showtime does not exist');
			}

			const ticketsOfShowtime = await showtime.getTickets();

			const availableTickets = ticketsOfShowtime
				.filter((ticket) => !ticket.status)
				.map((ticket) => ticket.id);

			const ticketsValid = tickets.every(({ ticketId }) =>
				availableTickets.includes(ticketId)
			);
			if (!ticketsValid) {
				throw new ApiError(
					400,
					'The ticket list is not valid, please check again'
				);
			}

			const booking = await createBooking({
				userId: req.user.id,
				bookingDetails: tickets,
			});

			if (!booking) {
				throw new ApiError(500, 'An error occurred while creating the booking');
			}

			const ticketsUpdated = await updateStatusOfTickets(
				true,
				tickets.map(({ ticketId }) => ticketId)
			);
			if (!ticketsUpdated) {
				throw new ApiError(
					500,
					'An error occurred while updating the status of tickets'
				);
			}

			await booking.reload();

			res.status(201).json({
				status: 'success',
				data: {
					booking,
				},
			});
		} catch (error) {
			next(error);
		}
	}
);

bookingRouter.get('/all', [authenticate], async (req, res, next) => {
	try {
		const bookings = await getBookings();

		if (!bookings) {
			throw new ApiError(500, 'An error occurred while fetching the bookings');
		}

		res.json({
			status: 'success',
			data: {
				bookings,
			},
		});
	} catch (error) {
		next(error);
	}
});

bookingRouter.get(
	'/',
	[authenticate, validatePagingQueries(), catchRequestError],
	async (req, res, next) => {
		const { page, limit } = req.query;

		try {
			const data = await getBookingsWithPagination(page, limit);

			if (!data) {
				throw new ApiError(
					500,
					'An error occurred while fetching the bookings'
				);
			}

			res.json({
				status: 'success',
				data,
			});
		} catch (error) {
			next(error);
		}
	}
);

bookingRouter.get('/:id', [authenticate], async (req, res, next) => {
	const { id } = req.params;

	try {
		const booking = await getBookingById(id);

		if (!booking) {
			throw new ApiError(404, 'Booking does not exist');
		}

		res.json({
			status: 'success',
			data: {
				booking,
			},
		});
	} catch (error) {
		next(error);
	}
});

bookingRouter.delete('/:id', [authenticate], async (req, res, next) => {
	const { id } = req.params;

	try {
		const booking = await getBookingById(id);
		if (!booking) {
			throw new ApiError(404, 'Booking does not exist');
		}

		const tickets = await booking.getTickets();

		const ticketsUpdated = await updateStatusOfTickets(
			false,
			tickets.map(({ id }) => id)
		);
		if (!ticketsUpdated) {
			throw new ApiError(
				500,
				'An error occurred while updating the status of tickets'
			);
		}

		const isBookingDeleted = await deleteBookingById(id);
		if (!isBookingDeleted) {
			throw new ApiError(500, 'An error occurred while deleting the booking');
		}

		res.json({
			status: 'success',
			message: 'Booking deleted successfully',
		});
	} catch (error) {
		next(error);
	}
});

bookingRouter.post(
	'/:id/cancel-booking',
	[authenticate],
	async (req, res, next) => {
		const { id } = req.params;
		try {
			const booking = await getBookingById(id);
			if (!booking) {
				throw new ApiError(404, 'Booking does not exist');
			}

			const isUpdated = await booking.update({ isCancelled: true });
			if (!isUpdated) {
				throw new ApiError(500, 'An error occurred while updating the booking');
			}

			const tickets = await booking.getTickets();

			const ticketsUpdated = await updateStatusOfTickets(
				false,
				tickets.map(({ id }) => id)
			);
			if (!ticketsUpdated) {
				throw new ApiError(
					500,
					'An error occurred while updating the status of tickets'
				);
			}

			res.json({
				status: 'success',
				message: 'Booking cancelled successfully',
			});
		} catch (error) {
			next(error);
		}
	}
);

module.exports = bookingRouter;

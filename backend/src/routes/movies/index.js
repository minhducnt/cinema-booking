"use strict";
const express = require("express");
const {
  getMovies,
  validateCreateMovieSchema,
  createMovie,
  getMovieById,
  updateMovie,
  validateUpdateMovieSchema,
  deleteMovie,
  getMoviesWithPagination,
} = require("../../services/movies");
const { getShowtimesByMovieId } = require("../../services/showtimes");
const { authenticate, authorize } = require("../../middlewares/auth");
const { uploadImage } = require("../../middlewares/upload");
const { catchRequestError } = require("../../middlewares/validator");
const removeFile = require("../../utils/removeFile");
const ApiError = require("../../utils/apiError");
const { validatePagingQueries } = require("../../services/pagination");

const movieRouter = express.Router();

movieRouter.post(
  "/",
  [
    authenticate,
    authorize("admin"),
    uploadImage("movies", "poster"),
    validateCreateMovieSchema(),
    catchRequestError,
  ],
  async (req, res, next) => {
    let { name, description, trailer, rating, duration, status, releaseDate, tmdbId } = req.body;

    if (!releaseDate) {
      releaseDate = null;
    }

    const poster = req.file?.path;

    try {
      const movie = await createMovie({
        name,
        description,
        poster,
        trailer,
        rating,
        duration,
        status,
        releaseDate,
        tmdbId,
      });

      if (!movie) {
        throw new ErrorHandler(500, "An error occurred while creating the movie");
      }

      await movie.reload();

      res.status(201).json({
        status: "success",
        data: {
          movie,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

movieRouter.get("/all", async (req, res, next) => {
  const { name } = req.query;

  try {
    const movies = await getMovies(name);

    if (!movies) {
      throw new ApiError(500, "An error occurred while fetching the movies");
    }

    res.json({
      status: "success",
      data: {
        movies,
      },
    });
  } catch (error) {
    next(error);
  }
});

movieRouter.get("/", [validatePagingQueries(), catchRequestError], async (req, res, next) => {
  const { name, page, limit } = req.query;

  try {
    const data = await getMoviesWithPagination(name, page, limit);

    if (!data) {
      throw new ApiError(500, "An error occurred while fetching the movies");
    }

    res.json({
      status: "success",
      data,
    });
  } catch (error) {
    next(error);
  }
});

movieRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const movie = await getMovieById(id);

    if (!movie) {
      throw new ApiError(404, "Movie does not exist");
    }

    res.json({
      status: "success",
      data: {
        movie,
      },
    });
  } catch (error) {
    next(error);
  }
});

movieRouter.put(
  "/:id",
  [
    authenticate,
    authorize("admin"),
    uploadImage("movies", "poster"),
    validateUpdateMovieSchema(),
    catchRequestError,
  ],
  async (req, res, next) => {
    const { id } = req.params;
    const poster = req.file?.path;
    const updates = {
      name: req.body.name,
      description: req.body.description,
      poster,
      trailer: req.body.trailer,
      rating: req.body.rating,
      duration: req.body.duration,
      status: req.body.status,
      releaseDate: req.body.releaseDate,
      tmdbId: req.body.tmdbId,
    };

    try {
      const movie = await getMovieById(id);
      if (!movie) {
        throw new ApiError(404, "Movie does not exist");
      }

      if (poster) {
        await removeFile(movie.poster);
      }

      const isUpdated = await updateMovie(updates, id);
      if (!isUpdated) {
        throw new ApiError(500, "An error occurred while updating the movie");
      }

      await movie.reload();

      res.json({
        status: "success",
        data: {
          movie,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

movieRouter.delete("/:id", [authenticate, authorize("admin")], async (req, res, next) => {
  const { id } = req.params;

  try {
    const movie = await getMovieById(id);

    if (!movie) {
      throw new ApiError(404, "Movie does not exist");
    }

    const numOfShowtimes = await movie.countShowtimes();
    if (numOfShowtimes > 0) {
      throw new ApiError(400, "Please delete the showtimes belonging to this movie first");
    }

    const isDeleted = await deleteMovie(id);
    if (!isDeleted) {
      throw new ApiError(500, "An error occurred while deleting the movie");
    }

    await removeFile(movie.poster);

    res.json({
      status: "success",
      message: "Movie deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});

movieRouter.get("/:id/showtimes", async (req, res, next) => {
  const { id } = req.params;

  try {
    const movie = await getMovieById(id);
    if (!movie) {
      throw new ApiError(404, "Movie does not exist");
    }

    const showtimesOfMovie = await getShowtimesByMovieId(id);
    if (!showtimesOfMovie) {
      throw new ApiError(500, "An error occurred while fetching the showrimes of the movie");
    }

    res.json({
      status: "success",
      data: {
        movie,
        cinemaComplexes: showtimesOfMovie,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = movieRouter;

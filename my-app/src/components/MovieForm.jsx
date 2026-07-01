import React, {useEffect} from "react";
import { useForm } from "react-hook-form";

function MovieForm({ onAddMovie,selectedMovie, onUpdateMovie }) {

const { register, handleSubmit, reset, formState: { errors}} = useForm();

useEffect(() => {
    if (selectedMovie) {
        reset({
        title: selectedMovie.title,
        hall: selectedMovie.hall,
        price: selectedMovie.price,
        posterUrl: selectedMovie.poster
        });
    }
}, [selectedMovie, reset]);

    const submitForm = (data) => {

        const newMovie = {
            id: Date.now(),
            title: data.title,
            hall: Number(data.hall),
            price: Number(data.price),
            poster: data.posterUrl,
            likes:0,
            dislikes:0
        };

        if (selectedMovie) {
            onUpdateMovie({
                ...newMovie,
                id: selectedMovie.id,
                likes: selectedMovie.likes,
                dislikes: selectedMovie.dislikes
            });
        } else {
        onAddMovie(newMovie);
        }

        reset();
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>

            <input
                placeholder="Naslov filma"
                {...register("title", {
                required: "Naslov je obavezan"
            })}
            />
            {errors.title && <p>{errors.title.message}</p>}

            <input
                type="number"
                placeholder="Sala"
                {...register("hall", {
                required: "Sala je obavezna",
                min: {
                value: 1,
                message: "Sala ne može biti manja od 1"
                },
                max: {
                value: 12,
                message: "Sala ne može biti veća od 12"
                }
            })}
            />

            {errors.hall && <p>{errors.hall.message}</p>}

            <input
                type="number"
                placeholder="Cena"
                {...register("price", {
                    required: "Cena je obavezna"
                })}
            />

            {errors.price && <p>{errors.price.message}</p>}

            <input
                placeholder="URL slike postera"
                {...register("posterUrl")}
            />

            <button type="submit">
                {selectedMovie ? "Sacuvaj izmene" : "Dodaj film"}
            </button>

        </form>
    );
}

export default MovieForm;
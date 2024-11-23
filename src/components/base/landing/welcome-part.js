import React from 'react'

const WelcomePart = () => {
    return (
        <div class="h-96 md:h-screen flex flex-col justify-center items-center bg-black text-center relative">
            <img src='/landing/rectangle-2.png' class="absolute top-4 left-6 md:top-0 md:left-0 w-12 h-18 md:w-52 md:h-64" alt="rectangle" />
            <div class="max-w-full md:max-w-5xl px-6">
                <h1 class="text-lg md:text-4xl font-semibold mb-4 text-white text-left leading-9 ">Bienvenido a la comunidad digital definitiva que te conecta con lo que necesitas para seguir creciendo , avanzando y expandíendote por el mundo digital.</h1>
                <p class="text-lg md:text-2xl text-lightgray font-light text-left pt-1">No olvides quitarte los zapatos antes de entrar...</p>
            </div>
            <img src='/landing/rectangle-1.png' class="absolute bottom-10 right-10 md:bottom-24 md:right-32 w-12 h-18 md:w-52 md:h-64" alt="rectangle" />
        </div>

    )
}

export default WelcomePart
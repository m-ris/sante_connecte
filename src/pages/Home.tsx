import React, { useState, useEffect } from 'react';
import bgImage from './assets/header.jpeg'; //


export default function App() {
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le loader

  // Utilisation de useEffect pour gérer le délai
  useEffect(() => {
    // Définir une durée de 3 secondes (par exemple)
    const timer = setTimeout(() => {
      setIsLoading(false); // Arrêter le loader
    }, 3000);

    // Nettoyage du timer en cas de démontage du composant
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Affiche le loader si isLoading est true */}
      {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <img
              src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
              alt="Loader"
              className="rounded-full h-28 w-28"
            />
          </div>
        </div>
      ) : (
        // Affiche la page d'accueil une fois le loader terminé
        <div className="Navbar">
         
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
  
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">G-santé</span>
          </a>
          <div className="flex items-center lg:order-2">
              <div className="hidden mt-2 mr-4 sm:inline-block">
                  <span></span>
              </div>
  
              <a href="https://themesberg.com/product/tailwind-css/landing-page"
                  className="text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Mon Espace Santé</a>
              <button data-collapse-toggle="mobile-menu-2" type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2" aria-expanded="true">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
          </div>
          <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                      <a href="#"
                          className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded lg:bg-transparent lg:text-green-700 lg:p-0 dark:text-white"
                          aria-current="page">Acceuil</a>
                  </li>
                  <li>
                      <a href="#"
                          className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sensibilisation</a>
                  </li>
                  <li>
                      <a href="#"
                          className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Pharmacie de Garde</a>
                  </li>
                  <li>
                      <a href="#"
                          className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Urgences</a>
                  </li>
                  <li>
                      <a href="#"
                          className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Chat Instantané</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
    <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-2/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-green-500 leading-tight font-medium">La Santé à Porter de Main</h2>
            <h3
                className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                 c’est l’assurance d’accéder facilement et rapidement aux soins qui vous conviennent. Notre plateforme simplifie la prise de rendez-vous, vous met en relation avec des professionnels de santé qualifiés et vous offre des outils modernes pour mieux gérer votre bien-être.
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-green-500 text-white">Chat Instantané</button>
                <button className="w-full mt-8 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-green-500 text-white  ">Mon Espace Santé</button>
            </div>
        </div>
        <div className="w-full h-full  flex justify-center md:justify-end">
            <img src="./assets/header.jpeg" />
        </div>
    </div>
</div>
 
    <div className="container">
        <div className="bg-white  ">
            <div className="text-center">
                <h2
                    className="text-4xl tracking-tight leading-10 font-extrabold text-green-500 sm:text-5xl sm:leading-none md:text-6xl">
                    L'endroit où 
                </h2>
                <h3 className='text-green-500 text-xl md:text-3xl mt-10'>les médecins vous écoutent</h3>
                <div className="container mx-auto py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
 
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg">
        <div className="bg-green-500 p-4 rounded-full">
           
          <img src="https://via.placeholder.com/50" alt="Soins Primaires" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">Soins Primaires</h3>
      </div>
       
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg">
        <div className="bg-green-500 p-4 rounded-full">
          <img src="https://via.placeholder.com/50" alt="Gérer votre santé" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">Gérer votre santé</h3>
      </div>
       
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg">
        <div className="bg-green-500 p-4 rounded-full">
          <img src="https://via.placeholder.com/50" alt="Ordonnance en ligne" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">Ordonnance en ligne</h3>
      </div>
       
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg">
        <div className="bg-green-500 p-4 rounded-full">
          <img src="https://via.placeholder.com/50" alt="Bien-être, Prévention et mode de vie" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">Bien-être, Prévention et mode de vie</h3>
      </div>
 
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg">
        <div className="bg-green-500 p-4 rounded-full">
          <img src="https://via.placeholder.com/50" alt="Consultation en ligne" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">Consultation en ligne</h3>
      </div>
    </div>

    <div className="mt-8 text-center">
      <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-green-600">
        Prenez un rendez-vous Vidéo
      </button>
    </div>
  </div>
  <div className="container mx-auto py-12">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Nos Patients nous aiment</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="bg-green-200 p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
        </div>
        <p className="text-gray-700 mb-4">
          Grâce à cette plateforme, j'ai pu prendre un rendez-vous rapidement avec un spécialiste. Un service efficace et rassurant !
        </p>
        <h3 className="font-bold text-lg text-gray-900">Dreche Ydriche</h3>
      </div>

       
      <div className="bg-green-200 p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
        </div>
        <p className="text-gray-700 mb-4">
          Le médecin m'a tout de suite mis à l'aise, il était très facile de lui poser des questions sur mes inquiétudes et il m'a donné d'excellents retours.
        </p>
        <h3 className="font-bold text-lg text-gray-900">Paul Walker</h3>
      </div>
    </div>

    <div className="text-center mt-8">
      <a href="#" className="text-blue-600 hover:underline text-lg">En savoir plus</a>
    </div>
  </div>
 
<div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

     
    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road" />
    </div>
     
    <div
        className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
    
        <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Vous avez une question sur la santé ?
            </h2>
            <p className="mt-4">
            Célestine, notre assistance médicale virtuel est là pour vous accompagner. Posez vos questions et obtenez des réponses rapides, fiables et personnalisées, basées sur des données médicales de confiance. Que ce soit pour des conseils, des informations ou des préoccupations, Célestine  est à votre disposition pour éclairer vos décisions et vous rassurer.
            </p>
   
            <div className="mt-8">
                <a href="#"
                    className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600   py-4 px-10 hover:bg-green-800  ">Poser ma question de santé
                     </a>
            </div>
        </div>

        
      


    </div>
 

</div>


   </div>
            
    </div>
    <div className=" h-screen flex items-center justify-center">
      <div className="relative flex items-center justify-center h-[500px] w-[500px]">
        {/* Logo central */}
        <div className="absolute w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
          <img src="https://via.placeholder.com/50" alt="Logo" className="w-16 h-16" />
        </div>

        {/* Fonctionnalité 1 (Haut) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center">
            <img src="https://via.placeholder.com/30" alt="Fonctionnalité 1" />
          </div>
          <p className="mt-2 text-center text-sm font-medium">Fonctionnalité 1</p>
        </div>

        {/* Fonctionnalité 2 (Haut droite) */}
        <div className="absolute top-1/4 right-0 transform -translate-y-1/2 flex flex-col items-center">
          <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center">
            <img src="https://via.placeholder.com/30" alt="Fonctionnalité 2" />
          </div>
          <p className="mt-2 text-center text-sm font-medium">Fonctionnalité 2</p>
        </div>

        {/* Fonctionnalité 3 (Bas droite) */}
        <div className="absolute bottom-1/4 right-0 transform translate-y-1/2 flex flex-col items-center">
          <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center">
            <img src="https://via.placeholder.com/30" alt="Fonctionnalité 3" />
          </div>
          <p className="mt-2 text-center text-sm font-medium">Fonctionnalité 3</p>
        </div>

        {/* Fonctionnalité 4 (Bas) */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center">
            <img src="https://via.placeholder.com/30" alt="Fonctionnalité 4" />
          </div>
          <p className="mt-2 text-center text-sm font-medium">Fonctionnalité 4</p>
        </div>

        {/* Fonctionnalité 5 (Bas gauche) */}
        <div className="absolute bottom-1/4 left-0 transform translate-y-1/2 flex flex-col items-center">
          <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center">
            <img src="https://via.placeholder.com/30" alt="Fonctionnalité 5" />
          </div>
          <p className="mt-2 text-center text-sm font-medium">Fonctionnalité 5</p>
        </div>

        {/* Fonctionnalité 6 (Haut gauche) */}
        <div className="absolute top-1/4 left-0 transform -translate-y-1/2 flex flex-col items-center">
          <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center">
            <img src="https://via.placeholder.com/30" alt="Fonctionnalité 6" />
          </div>
          <p className="mt-2 text-center text-sm font-medium">Fonctionnalité 6</p>
        </div>
      </div>
    </div>
</div>




<div className="mt-8 bg-green-500 pt-9">
  <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
    <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
      <div className="md:w-[316px]">
        <p className="text-[18px] font-medium text-white">
        <h1 className="text-white font-extrabold">
          <span className="text-rose-600">Lion's</span>-Tech
        </h1>
        </p>
        <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eos, fugit non. Incidunt dolorum adipisci, tempore asperiores nemo odio facere officiis enim animi
          placeat eaque nesciunt alias beatae id, at dicta.</p>
         
      </div>
      
      <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
        <div className="">
          <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">Lien Rapide</p>
          <ul>
            <li className="mt-[15px]"><a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/">Acceuil</a></li>
            <li className="mt-[15px]"><a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/our-tutors">Sensibilisation</a></li>
            <li className="mt-[15px]"><a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/become-a-tutor">Pharmacie de Gardes</a></li>
            <li className="mt-[15px]"><a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/plans-and-pricing">Urgences</a></li>
            <li className="mt-[15px]"><a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/terms-and-conditions">Chat Instantanée</a></li>
            <li className="mt-[15px]"><a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/privacy-policy">Mon espace santé</a></li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col gap-4 sm:mt-0">
          <p className="text-deutziawhite font-inter text-[18px] font-medium">Telecharger l'application G-santé</p>
          <div className="flex gap-4 sm:flex-col">
            <a target="_blank"
              href="#"><img alt="facebook icon" loading="lazy" width="168" height="50" decoding="async" data-nimg="1"   src="https://www.englishyaari.com/img/google-store.svg" /></a><a
              target="_blank"
              href="#"><img alt="facebook icon" loading="lazy" width="168" height="50" decoding="async" data-nimg="1"   src="https://www.englishyaari.com/img/apple-store.svg" /></a>
          </div>
        </div>
      </div>
    </div>
    <hr className="mt-[30px] text-white" />
    <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
      <p className="text-[10px] font-normal text-white md:text-[12px]">
        © Copyright
         2025
         , All Rights Reserved by Lion's-Tech
      </p>
    </div>
  </div>
</div>
  <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
  </div>
      )}
    </div>
    
  );
}

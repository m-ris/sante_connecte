import React from "react";
import bgImage from './assets/urgence_header.jpg';

const EmergencyPage = () => {
  return (
    
    <div className="bg-gray-50 min-h-screen w-full">
        <div className="relative max-w-7xl mx-auto mt-10">
      <img className="h-64 w-full object-cover rounded-md" src="./assets/urgence_header.jpg" alt="Random image" />
      <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">Get Lost in Mountains</h2>
    </div>
       </div> 
               {/* Section des consignes */}
      <div className="bg-white py-4 ">
        <h1 className="text-center text-2xl font-bold text-green-600">
          Consigne pour passer un appel d'urgence
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 p46">
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <div
              key={number}
              className="bg-white shadow-lg rounded-md p-4 text-center"
            >
              <div className="w-12 h-12 bg-green-700 text-white rounded-full mx-auto flex items-center justify-center font-bold mb-4">
                {number}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Garder son calme
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {number === 1
                  ? "Prenez une grande respiration et parlez clairement pour éviter toute confusion."
                  : number === 2
                  ? "Identifiez votre localisation pour faciliter l'arrivée des secours."
                  : number === 3
                  ? "Décrivez clairement la situation et l'urgence."
                  : number === 4
                  ? "Écoutez attentivement les instructions de l'opérateur."
                  : number === 5
                  ? "Ne raccrochez pas tant que l'opérateur ne vous l'indique pas."
                  : "Soyez prêt à répondre aux questions supplémentaires."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section des entités d'urgence */} 
      <div className="py-8">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
          Entité d'urgence
        </h2>
        <div className="w-full px-6">
          <div className="grid grid-cols-5 gap-4 text-center font-bold text-sm bg-green-100 text-gray-700 py-2 rounded-t">
            <div>N°</div>
            <div>Entité</div>
            <div>Type d'urgences</div>
            <div>Numéro d'urgence</div>
            <div>Action</div>
          </div>
          <div className="grid grid-cols-5 gap-4 text-center text-gray-700 bg-white py-2 shadow-md rounded-b">
            <div>01</div>
            <div>Ambulances</div>
            <div>Aides soignant</div>
            <div>06 712 54 85</div>
            <div className="flex justify-center gap-2">
              <button className="bg-green-700 text-white px-4 py-2 rounded">
                Passer un appel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Itinérances
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-600">Sauver des vies</h2>
          <p className="text-gray-600">En apportant les premiers secours</p>
        </div>

        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {/* Article 1 */}
        <div
          className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)",
          }}
        >
          <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
            <a
              href="#"
              className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
            >
              Politics
            </a>
            <div className="text-white font-regular flex flex-col justify-start">
              <span className="text-3xl leading-0 font-semibold">25</span>
              <span className="-mt-3">May</span>
            </div>
          </div>
          <main className="p-5 z-10">
            <a
              href="#"
              className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
            >
              Dr. Abdullah Abdullah's Presidential Election Campaign
            </a>
          </main>
        </div>

        {/* Article 2 */}
        <div
          className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://media.gettyimages.com/photos/ashraf-ghani-afghanistans-president-speaks-at-the-council-on-foreign-picture-id850794338?k=6&m=850794338&s=612x612&w=0&h=b_XBw5S38Cioslqr6VL3e36cWQU205IsInqDXZpDOD4=)",
          }}
        >
          <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
            <a
              href="#"
              className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
            >
              Politics
            </a>
            <div className="text-white font-regular flex flex-col justify-start">
              <span className="text-3xl leading-0 font-semibold">10</span>
              <span className="-mt-3">Mar</span>
            </div>
          </div>
          <main className="p-5 z-10">
            <a
              href="#"
              className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
            >
              Afghanistan's President Ashraf Ghani Speaks At The Council
            </a>
          </main>
        </div>

        {/* Article 3 */}
        <div
          className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-arrives-to-the-welcoming-ceremony-the-picture-id694155252?k=6&m=694155252&s=612x612&w=0&h=IIJPetzJL-hAgPkE4hm2wUKvO4YOav8jJp484CgLEUs=)",
          }}
        >
          <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
            <a
              href="#"
              className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
            >
              Politics
            </a>
            <div className="text-white font-regular flex flex-col justify-start">
              <span className="text-3xl leading-0 font-semibold">20</span>
              <span className="-mt-3">Jan</span>
            </div>
          </div>
          <main className="p-5 z-10">
            <a
              href="#"
              className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
            >
              Middle East Participants Gather In Warsaw
            </a>
          </main>
        </div>
      </div>
        </div>
      </div>
      </div>
     
  );
};

export default EmergencyPage;

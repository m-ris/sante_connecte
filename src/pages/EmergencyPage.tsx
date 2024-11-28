<div className="bg-gray-50 min-h-screen">
{/* Header Table */}
<div className="py-4 bg-white shadow-md">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-2xl font-bold text-green-600 mb-4">Entité d'urgence</h1>
    <div className="grid grid-cols-5 gap-4 text-center font-bold text-sm text-gray-700">
      <div className="p-2 bg-green-100 rounded">N°</div>
      <div className="p-2 bg-green-100 rounded">Entité</div>
      <div className="p-2 bg-green-100 rounded">Type d'urgences</div>
      <div className="p-2 bg-green-100 rounded">Numéro d'urgence</div>
      <div className="p-2 bg-green-100 rounded">Action</div>
    </div>
    <div className="grid grid-cols-5 gap-4 text-center text-gray-700 mt-2">
      <div className="p-2 bg-gray-100 rounded">01</div>
      <div className="p-2 bg-gray-100 rounded">Ambulances</div>
      <div className="p-2 bg-gray-100 rounded">Aides soignant</div>
      <div className="p-2 bg-gray-100 rounded">06 712 54 85</div>
      <div className="p-2 bg-gray-100 rounded flex gap-2 justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Passer un appel</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Itinérances</button>
      </div>
    </div>
  </div>
</div>

{/* Main Section */}
<div className="py-10">
  <div className="text-center">
    <h2 className="text-3xl font-bold text-green-600">Sauver des vies</h2>
    <p className="text-gray-600">En apportant les premiers secours</p>
  </div>

  {/* Card Section */}
  <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Image placeholder"
          className="w-full h-32 object-cover rounded-md"
        />
        <h3 className="mt-4 font-bold text-gray-800">Stopper une hémorragie</h3>
        <p className="text-sm text-gray-600 mt-2">
          Lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem0
        </p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          En savoir Plus
        </button>
      </div>
    ))}
  </div>
</div>
</div>
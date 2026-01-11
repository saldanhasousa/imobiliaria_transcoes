function Mapa() {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h2 className="font-bold mb-3 text-gray-800">Localização</h2>

      <iframe
        className="w-full h-64 rounded-lg"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=..."
      />
    </div>
  );
}
export default Mapa
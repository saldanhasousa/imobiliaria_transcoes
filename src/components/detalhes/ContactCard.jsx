function ContactCard() {
  return (
    <aside className="h-72 bg-white rounded-xl p-6 shadow sticky top-24 space-y-4">
      <h3 className="font-bold text-gray-800">Fale com o anunciante</h3>

      <button className="w-full bg-green-500 text-white py-3 rounded-xl">
        WhatsApp
      </button>

      <button className="w-full border py-3 rounded-xl">
        Chamada telefónica
      </button>
    </aside>
  );
}
export default ContactCard

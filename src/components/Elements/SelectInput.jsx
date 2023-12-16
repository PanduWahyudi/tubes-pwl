function SelectInput() {
  return (
    <select
      id="countries"
      className=" border border-[#8B8B8B] text-gray-900 text-sm rounded-lg focus:outline-none focus:visible focus:ring-[#8B8B8B] focus:border-[#8B8B8B] block w-64 p-2.5 
      mt-2"
    >
      <option value="">Pilih Kategori</option>
      <option value="Makanan">Makanan</option>
      <option value="Minuman">Minuman</option>
      <option value="Cemilan">Cemilan</option>
    </select>
  );
}

export default SelectInput;

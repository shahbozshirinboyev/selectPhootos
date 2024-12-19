import { useState } from "react"

function App() {
  const [photos, setPhotos] = useState({
    urls: [],
    files: []
  });

  const handlePhotos = (e) => {
    const files = Array.from(e.target.files); // Tanlangan fayllarni massivga o'giramiz
    const urls = files.map((file) => URL.createObjectURL(file)); // Fayllar URLini yaratamiz
    setPhotos({ files, urls }); // Holatni yangilaymiz
    console.log("Tanlangan fayllar:", files); // Fayllarni konsolga chiqaramiz
  };

  const removePhoto = (index) => {
    setPhotos((prevState) => {
      const updatedUrls = [...prevState.urls];
      const updatedFiles = [...prevState.files];
      // Massivdan elementni o'chiramiz
      updatedUrls.splice(index, 1);
      updatedFiles.splice(index, 1);
      return {
        urls: updatedUrls,
        files: updatedFiles
      };
    });
  };

  console.log(photos)

  return (
    <div>


      <form>

        <div className="p-12">

          <label htmlFor="selectPhotos" className="z-[5] flex flex-col border border-dashed rounded-xl justify-start p-4 cursor-pointer select-none">
            <div className="flex flex-col items-center">
              <span className={`font-medium ${photos.urls.length === 0 ? "" : "hidden"}`}>Добавьте фото</span>
              <span className={`${photos.urls.length === 0 ? "" : "hidden"}`}>Перетащите сюда или <span className="text-sky-600">выберите на компьютере</span></span>
            </div>

            <div className="flex justify-start items-center gap-4" >
              {photos.urls.map((photo, index) => (
                <div key={index} className="relative">
                  <span onClick={(e) => { e.preventDefault(); removePhoto(index); }} className="absolute z-[25] -right-2 -top-2 bg-white hover:bg-gray-200 w-[30px] h-[30px] border rounded-full p-1 flex justify-center items-center text-[12px]">❌</span>
                  <img src={photo} className="w-[75px] h-[75px] border z-[10]" />
                </div>
              ))}
            </div>

          </label>
          <input id="selectPhotos" className="hidden" type="file" name="photos" multiple onChange={handlePhotos} />

        </div>

      </form>
    </div>
  )
}

export default App
import { useState } from "react"

function App() {
  const [photos, setPhotos] = useState({
      urls: [], 
      files: []
    });

    const handlePhotos = (e) => {

      console.log(e)

      const files = Array.from(e.target.files); // Tanlangan fayllarni massivga o'giramiz
      const urls = files.map((file) => URL.createObjectURL(file)); // Fayllar URLini yaratamiz
      setPhotos({ files, urls }); // Holatni yangilaymiz
      console.log("Tanlangan fayllar:", files); // Fayllarni konsolga chiqaramiz

    };

    console.log(photos)

  return (
    <div>


      <form>
        
        <div className="p-12">

        <label htmlFor="selectPhotos" className="flex flex-col border border-dashed rounded-xl justify-center items-center p-6 cursor-pointer select-none">
          
          <span className={`font-medium ${photos.urls.length === 0 ? "" : "hidden"}`}>Добавьте фото</span>
          <span className={`${photos.urls.length === 0 ? "" : "hidden"}`}>Перетащите сюда или <span className="text-sky-600">выберите на компьютере</span></span>

          <div>
            { photos.urls.map((photo, index) => (
            <img key={index} src={photo} className="w-[90px] h-[90px]" />
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
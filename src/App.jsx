import { useState } from "react"

function App() {
  const [photos, setPhotos] = useState({
    urls: [],
    files: []
  });

  const handlePhotos = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setPhotos({ files, urls });
  };

  const removePhoto = (index) => {
    setPhotos((prevState) => {
      const updatedUrls = [...prevState.urls];
      const updatedFiles = [...prevState.files];
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

          <label htmlFor="selectPhotos" className="flex flex-col border border-dashed rounded-xl justify-start p-4 cursor-pointer select-none">
            <div className="flex flex-col items-center">
              <span className={`text-[14px] md:text-[16px] font-medium ${photos.urls.length === 0 ? "" : "hidden"}`}>Добавьте фото</span>
              <span className={`${photos.urls.length === 0 ? "" : "hidden"} text-[12px] md:text-[14px]`}>Перетащите сюда или <span className="text-sky-600">выберите на компьютере</span></span>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-4" >
              {photos.urls.map((photo, index) => (
                <div key={index} className="relative">
                  <span onClick={(e) => { e.preventDefault(); removePhoto(index); }} className="absolute -right-2 -top-2 bg-white hover:bg-red-100 w-[25px] h-[25px] border border-red-100 rounded-full p-1 flex justify-center items-center text-[10px]">❌</span>
                  <img src={photo} className="w-[70px] h-[70px] border border-red-100" />
                </div>
              ))}
            </div>
            <input id="selectPhotos" className="hidden" type="file" name="photos" multiple onChange={handlePhotos} />
          </label>

        </div>

      </form>
    </div>
  )
}

export default App
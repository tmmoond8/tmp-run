import React from "react";

export const RequestConsultation = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const imageElementRef = React.useRef<HTMLImageElement>(null);
  const [images, setImages] = React.useState<any[]>([]);

  console.log("images", images);

  return (
    <div>
      <div className="flex">
        <span>이미지 업로드 테스트</span>
        <input
          hidden
          multiple
          type="file"
          ref={inputRef}
          accept="image/*"
          onChange={({ target }) => {
            if (target.files && target.files.length > 0) {
              for (let i = 0; i < target.files.length; i++) {
                const file = target.files[i];
                const reader = new FileReader();
                reader.onload = function (e) {
                  if (e.target?.result) {
                    setImages((prev) => prev.concat(e.target!.result));
                  }
                };
                reader.readAsDataURL(file);
              }
            }
          }}
        />
        <button
          className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.click();
            }
          }}
        >
          이미지 찾기
        </button>
      </div>
      <div className="flex h-40 gap-4 overflow-auto">
        {images.map((imageUrl, index) => (
          <img
            draggable={false}
            className="h-full w-auto"
            src={imageUrl}
            key={imageUrl + index}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

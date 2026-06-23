import React, { useState, useRef, useEffect, useCallback } from "react";
import { IoArrowForward } from "react-icons/io5";
// import VenoBox from "venobox";
// import "venobox/dist/venobox.min.css";

// Types
interface ImageItem {
  id: string;
  url: string;
  order: number;
  thumbnail?: string;
}

interface UploadProgress {
  percent: number;
  loaded: number;
  total: number;
}

interface AdMediaUploaderProp {
  nextItem: () => void;
}
// Main Component
const AdMediaUploader = ({ nextItem }: AdMediaUploaderProp) => {
  // States
  const [images, setImages] = useState<ImageItem[]>([]);
  const [maxImagesCount, setMaxImagesCount] = useState<number>(8);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());
  const [venoboxInstance, setVenoboxInstance] = useState<any>(null);

  // Video states
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isUploadingVideo, setIsUploadingVideo] = useState<boolean>(false);
  const [videoUploadProgress, setVideoUploadProgress] =
    useState<UploadProgress>({
      percent: 0,
      loaded: 0,
      total: 0,
    });

  // Refs
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const sortableContainerRef = useRef<HTMLDivElement>(null);

  // Initialize VenoBox
  const initializeVenoBox = useCallback(() => {
    if (venoboxInstance) {
      try {
        venoboxInstance.destroy();
      } catch (e) {
        console.log("VenoBox destroy error:", e);
      }
    }

    document
      .querySelectorAll(".ad-image, .ad-image-mobile")
      .forEach((element) => {
        element.removeAttribute("data-venobox");
        element.classList.remove("venobox");
      });

    // try {
    //   const newVenobox = new VenoBox({
    //     selector: ".ad-image",
    //     numeration: true,
    //     infinigall: true,
    //     maxWidth: "90%",
    //     share: false,
    //     spinner: "wander",
    //   });

    //   new VenoBox({
    //     selector: ".ad-image-mobile",
    //     numeration: true,
    //     infinigall: true,
    //     maxWidth: "95%",
    //     share: false,
    //     spinner: "wander",
    //   });

    //   setVenoboxInstance(newVenobox);
    //   console.log("VenoBox initialized successfully");
    // } catch (e) {
    //   console.log("VenoBox initialization error:", e);
    // }
  }, [venoboxInstance]);

  // Re-initialize VenoBox when images change
  useEffect(() => {
    if (images.length > 0) {
      setTimeout(() => {
        initializeVenoBox();
      }, 100);
    }
  }, [images, initializeVenoBox]);

  // Handle image upload
  const handleImageUpload = async (files: FileList | null) => {
    if (!files) return;

    const filesArray = Array.from(files);
    const remainingSlots = maxImagesCount - images.length;

    if (filesArray.length > remainingSlots) {
      alert(`حداکثر تعداد تصاویر ${maxImagesCount} عدد می باشد`);
      return;
    }

    for (const file of filesArray) {
      if (!file.type.startsWith("image/")) {
        alert("لطفاً فقط فایل‌های تصویری آپلود کنید");
        continue;
      }

      const imageId =
        Date.now().toString() + Math.random().toString(36).substr(2, 9);
      setLoadingImages((prev) => new Set(prev).add(imageId));

      try {
        // Simulate upload - replace with actual API call
        const formData = new FormData();
        formData.append("image", file);
        formData.append("_token", "YOUR_CSRF_TOKEN");

        // const response = await fetch('/upload-endpoint', {
        //   method: 'POST',
        //   body: formData
        // });
        // const data = await response.json();

        // Simulate successful upload
        const imageUrl = URL.createObjectURL(file);

        const newImage: ImageItem = {
          id: imageId,
          url: imageUrl,
          order: images.length + 1,
        };

        setImages((prev) => [...prev, newImage]);
      } catch (error) {
        console.error("Upload failed:", error);
        alert("آپلود تصویر با خطا مواجه شد");
      } finally {
        setLoadingImages((prev) => {
          const newSet = new Set(prev);
          newSet.delete(imageId);
          return newSet;
        });
      }
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle image deletion
  const handleImageDelete = async (imageId: string) => {
    if (window.confirm("آیا از حذف این تصویر اطمینان دارید؟")) {
      try {
        // Simulate API call
        // await fetch(`/delete-image/${imageId}`, { method: 'DELETE' });

        setImages((prev) => prev.filter((img) => img.id !== imageId));

        // Reorder remaining images
        setImages((prev) =>
          prev.map((img, idx) => ({ ...img, order: idx + 1 })),
        );
      } catch (error) {
        console.error("Delete failed:", error);
        alert("حذف تصویر با خطا مواجه شد");
      }
    }
  };

  // Handle image reordering
  const moveImage = (dragIndex: number, hoverIndex: number) => {
    const newImages = [...images];
    const [draggedImage] = newImages.splice(dragIndex, 1);
    newImages.splice(hoverIndex, 0, draggedImage);

    const reorderedImages = newImages.map((img, idx) => ({
      ...img,
      order: idx + 1,
    }));

    setImages(reorderedImages);
  };

  // Handle video upload
  const handleVideoUpload = async (file: File | null) => {
    if (!file) return;

    const allowedTypes = ["video/mp4", "video/mov", "video/avi", "video/webm"];
    const maxSize = 100 * 1024 * 1024; // 100MB

    if (!allowedTypes.includes(file.type)) {
      alert("فرمت‌های مجاز: MP4, MOV, AVI, WebM");
      return;
    }

    if (file.size > maxSize) {
      alert("حداکثر حجم ویدیو 100MB می باشد");
      return;
    }

    setIsUploadingVideo(true);
    setVideoUploadProgress({ percent: 0, loaded: 0, total: file.size });

    try {
      // Simulate upload with progress
      const formData = new FormData();
      formData.append("video", file);
      formData.append("_token", "YOUR_CSRF_TOKEN");

      // Simulate progress
      const interval = setInterval(() => {
        setVideoUploadProgress((prev) => {
          const newPercent = Math.min(prev.percent + 10, 100);
          const newLoaded = (newPercent / 100) * prev.total;
          return {
            ...prev,
            percent: newPercent,
            loaded: newLoaded,
          };
        });
      }, 200);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      clearInterval(interval);

      // const response = await fetch('/upload-video', {
      //   method: 'POST',
      //   body: formData
      // });
      // const data = await response.json();

      const videoUrl_ = URL.createObjectURL(file);
      setVideoUrl(videoUrl_);
      setVideoFile(file);

      setVideoUploadProgress({
        percent: 100,
        loaded: file.size,
        total: file.size,
      });
    } catch (error) {
      console.error("Video upload failed:", error);
      alert("آپلود ویدیو با خطا مواجه شد");
    } finally {
      setIsUploadingVideo(false);
      setTimeout(() => {
        setVideoUploadProgress({ percent: 0, loaded: 0, total: 0 });
      }, 1000);
    }
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleImageUpload(files);
  };

  // Video drag and drop
  const handleVideoDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith("video/")) {
      handleVideoUpload(files[0]);
    }
  };

  return (
    <div className="bg-white p-2 lg:p-4  w-full rounded-2xl container mx-auto">
      {/* Image Upload Section */}
      <div className="mb-6">
        {/* Dropzone */}
        <div
          ref={dropzoneRef}
          className={`dropzone rounded-2xl bg-slate-200 dark:border-slate-600 border-dashed items-center text-center justify-center align-middle shadow-md mb-4 cursor-pointer ${
            isDragging ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleImageUpload(e.target.files)}
          />
          <svg
            className="size-24 opacity-50 mx-auto block cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="CurrentColor"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                stroke="CurrentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          <div className="dz-default dz-message">
            <button
              className="dz-button"
              type="button"
              onClick={(e) => e.stopPropagation()}
            >
              برای آپلود تصاویر اینجا کلیک کنید
            </button>
          </div>
        </div>

        {/* Image Manager */}
        <div className="space-y-6">
          {/* Header Section */}
          <div className="p-4 border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 dark:border-blue-700 rounded-xl sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg dark:bg-blue-800">
                  <svg
                    className="w-5 h-5 text-blue-600 sm:w-6 sm:h-6 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-800 sm:text-lg dark:text-white">
                    مدیریت تصاویر
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 sm:justify-end rtl:space-x-reverse">
                <span className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-800 dark:text-blue-200 whitespace-nowrap">
                  {images.length} / {maxImagesCount}
                </span>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div
            ref={sortableContainerRef}
            id="sortable-images"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
          >
            {images.map((image, index) => (
              <ImageCard
                key={image.id}
                image={image}
                index={index}
                isLoading={loadingImages.has(image.id)}
                onDelete={handleImageDelete}
                onMove={moveImage}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Upload Section */}
      <div className="mb-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="p-4 border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 dark:border-purple-700 rounded-xl mb-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg dark:bg-purple-800">
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-gray-800 sm:text-lg dark:text-white">
                آپلود ویدیو
              </h3>
              <p className="mt-1 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                فرمت‌های مجاز: MP4, MOV, AVI, WebM (حداکثر حجم: 100MB)
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative overflow-hidden transition-all duration-300 bg-white border-2 border-dashed border-purple-300 rounded-xl dark:border-purple-700 hover:border-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-900/20"
          id="video-upload-area"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleVideoDrop}
        >
          <input
            ref={videoInputRef}
            type="file"
            id="video-file-input"
            accept="video/mp4,video/mov,video/avi,video/webm"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={(e) => handleVideoUpload(e.target.files?.[0] || null)}
          />

          {!isUploadingVideo && !videoUrl ? (
            <div
              className="flex flex-col items-center justify-center p-12 text-center"
              id="video-upload-content"
            >
              <div className="mb-4 p-4 bg-purple-100 rounded-full dark:bg-purple-800">
                <svg
                  className="w-12 h-12 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-semibold text-gray-800">
                برای آپلود ویدیو اینجا کلیک کنید
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                فرمت‌های مجاز: MP4, MOV, AVI, WebM
              </p>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                حداکثر حجم: 100MB
              </p>
            </div>
          ) : isUploadingVideo ? (
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <div className="mb-4 p-4 bg-purple-100 rounded-full dark:bg-purple-800">
                <svg
                  className="w-12 h-12 text-purple-600 dark:text-purple-400 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
              </div>
              <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                در حال آپلود ویدیو...
              </h4>
              <div className="w-full max-w-md">
                <div className="flex justify-between mb-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>{videoUploadProgress.percent}%</span>
                  <span>
                    {formatBytes(videoUploadProgress.loaded)} /{" "}
                    {formatBytes(videoUploadProgress.total)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                  <div
                    className="bg-purple-600 h-3 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${videoUploadProgress.percent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <video
                src={videoUrl || undefined}
                className="w-full rounded-xl"
                controls
                autoPlay={false}
              />
              <button
                onClick={() => {
                  setVideoFile(null);
                  setVideoUrl(null);
                  if (videoInputRef.current) {
                    videoInputRef.current.value = "";
                  }
                }}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={nextItem}
        className="bg-blue-500 group cursor-pointer transition-all hover:bg-blue-600 text-white p-1.5 w-full rounded-xl font-kalame-Medium flex items-center justify-center relative h-11"
      >
        <p className="transition-all duration-300 absolute group-hover:opacity-0 group-hover:translate-x-3">
          ثبت اطلاعات اگهی
        </p>

        <IoArrowForward
          size={25}
          className="transition-all rotate-180 duration-300 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </button>
    </div>
  );
};

// Image Card Component
interface ImageCardProps {
  image: ImageItem;
  index: number;
  isLoading: boolean;
  onDelete: (id: string) => void;
  onMove: (dragIndex: number, hoverIndex: number) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  index,
  isLoading,
  onDelete,
  onMove,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragStartIndex = useRef<number | null>(null);

  const handleDragStart = (e: React.DragEvent, idx: number) => {
    dragStartIndex.current = idx;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", "");
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    if (dragStartIndex.current !== null && dragStartIndex.current !== idx) {
      onMove(dragStartIndex.current, idx);
      dragStartIndex.current = idx;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    dragStartIndex.current = null;
  };

  return (
    <div
      className={`image-item group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
        isDragging ? "opacity-50" : ""
      } ${isLoading ? "loading" : ""}`}
      draggable={!isLoading}
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={(e) => handleDragOver(e, index)}
      onDragEnd={handleDragEnd}
    >
      <img
        src={image.url}
        alt={`تصویر ${index + 1}`}
        className="ad-image w-full h-32 sm:h-40 object-cover cursor-pointer"
        data-venobox
        data-gall="gallery"
      />

      {/* Mobile version */}
      <img
        src={image.url}
        alt={`تصویر ${index + 1}`}
        className="ad-image-mobile hidden"
        data-venobox
        data-gall="gallery-mobile"
      />

      {/* Order badge */}
      <div className="order-badge absolute top-2 right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md">
        {image.order}
      </div>

      {/* Drag handle */}
      <div className="drag-handle absolute top-2 left-2 bg-gray-800/70 text-white p-1 rounded cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 8h16M4 16h16"
          ></path>
        </svg>
      </div>

      {/* Delete button */}
      <button
        onClick={() => onDelete(image.id)}
        className="absolute bottom-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
        disabled={isLoading}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </button>
    </div>
  );
};

// Utility function to format bytes
const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export default AdMediaUploader;

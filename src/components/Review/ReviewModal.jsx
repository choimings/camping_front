import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // useSelector를 Redux에서 가져옴
import { IoMdCloseCircle } from 'react-icons/io'; // 닫기 아이콘

const ReviewModal = ({ closeModal, addReview }) => {
  const [title, setTitle] = useState('');
  const [grade, setGrade] = useState(0);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [featuredImage, setFeaturedImage] = useState(null);

  const googleId = useSelector((state) => state.auth.authData?.sub);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    if (files.length + images.length > 5) {
      alert('최대 5장까지 업로드할 수 있습니다.');
      return;
    }

    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);

    // 첫 번째 이미지를 기본 대표 사진으로 설정
    if (!featuredImage && newImages.length > 0) {
      setFeaturedImage(newImages[0]);
    }
  };

  const handleFeaturedImageChange = (image) => {
    setFeaturedImage(image);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((_, i) => i !== index);

      // 대표 사진이 삭제된 경우, 삭제된 사진이 대표 사진이면 목록의 첫 번째 이미지로 설정
      if (prevImages[index] === featuredImage) {
        setFeaturedImage(updatedImages.length > 0 ? updatedImages[0] : null);
      }

      return updatedImages;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && grade && googleId) {
      const newReview = {
        title,
        grade,
        date,
        description,
        images, // 이미지 배열을 전송
        featuredImage,
        userId: googleId, // 구글 ID를 userId로 전송
      };

      console.log('Sending Data:', newReview);

      try {
        const response = await fetch('http://localhost:8000/post_tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newReview),
        });

        const result = await response.json();
        if (response.ok) {
          console.log('Review successfully submitted:', result);
          addReview(newReview);
          closeModal();
        } else {
          console.error('Failed to submit review:', result.error);
        }
      } catch (error) {
        console.error('Error while submitting review:', error);
      }
    } else {
      alert('제목과 별점, 구글 ID는 필수 항목입니다.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-auto">
        <h2 className="text-2xl font-semibold mb-4">리뷰 작성</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            방문한 캠핑장 이름 (필수):
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </label>

          <label className="block mb-2">
            별점 (필수):
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setGrade(star)}
                  style={{
                    cursor: 'pointer',
                    color: star <= grade ? 'gold' : 'gray',
                  }}
                  className="text-2xl"
                >
                  ★
                </span>
              ))}
            </div>
          </label>

          <label className="block mb-2">
            날짜:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </label>

          <label className="block mb-4">
            후기:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded mt-1"
              rows="4"
            />
          </label>

          <label className="block mb-4">
            사진 추가:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded mt-1"
              multiple
            />
          </label>

          <div className="mb-4">
            {featuredImage && (
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={featuredImage}
                  alt="대표 사진"
                  className="w-full h-full object-cover rounded"
                />
                <div className="absolute top-0 right-0 bg-cyan-500 text-white p-1 rounded-full">
                  대표 사진
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            {images.map((image, index) => (
              <div key={index} className="relative w-32 h-32">
                <img
                  src={image}
                  alt={`미리보기 ${index}`}
                  className="w-full h-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 text-black p-1 rounded-full"
                >
                  <IoMdCloseCircle />
                </button>
                <button
                  type="button"
                  onClick={() => handleFeaturedImageChange(image)}
                  className={`absolute bottom-0 left-0 ${
                    image === featuredImage ? 'bg-cyan-500' : 'bg-cyan-200'
                  } text-black p-1 rounded-full`}
                >
                  {image === featuredImage ? '대표 사진' : '대표로 설정'}
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-cyan-500 text-white px-4 py-2 rounded mr-2"
            >
              리뷰 등록
            </button>
            <button
              onClick={closeModal}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;

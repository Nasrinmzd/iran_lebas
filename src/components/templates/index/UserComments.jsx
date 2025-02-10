import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../SectionTitle";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

function UserComments() {
  const comments = [
    {
      id: 1,
      name: "علی علینژاد",
      image: "/images/user1.png",
      productImage: "/images/coat.png",
    },
    {
      id: 2,
      name: "مهسا زندگی",
      image: "/images/user2.png",
      productImage: "/images/paltoZ.png",
    },
    {
      id: 3,
      name: "علیرضا فخار",
      image: "/images/user2.png",
      productImage: "/images/hoodi2.png",
    },
   
  ];

  return (
    <section className="mb-[150px]">
      <SectionTitle>بهترین از نظر کاربران</SectionTitle>
      <div className="h-[293px] relative">
        
        <Swiper
           modules={[Navigation, Autoplay]}
           navigation
           spaceBetween={120}
           slidesPerView={2}
           centeredSlides={true} 
           autoplay={{ delay: 3000, reverseDirection: true }}
           loop={true}
           className="max-w-full mx-auto swiper-container-custom"
        >
          {comments.map((comment) => (
            <SwiperSlide key={comment.id}>
              <div className="w-[730px] h-[293px] rounded-[50px] bg-[#F4F4F4] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex justify-between items-center mb-2">
                <div className="w-[373px] h-[257px] mr-[62px] ml-[56px]">
                  <div className="flex items-center">
                    <img
                      className="w-[57px] h-[57px]"
                      src={comment.image}
                      alt={comment.name}
                    />
                    <span className="font-bold text-lg text-primary mr-2">
                      {comment.name} 
                    </span>
                  </div>
                  <div className="font-normal text-lg text-secondary text-justify mt-[17px]">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </p>
                    <p>چاپگرها و متون بلکه روزنامه</p>
                  </div>
                  <div className="flex items-center mt-[50px]">
                    <p className="ml-2 font-normal text-[16px] text-black leading-[19.36px]">
                      20%
                    </p>
                    <img
                      className="ml-[21px]"
                      src="/images/dislike.svg"
                      alt=""
                    />
                    <p className="ml-2 font-normal text-[16px] text-black leading-[19.36px]">
                      80%
                    </p>
                    <img src="/images/like.svg" alt="" />
                  </div>
                </div>
                <div className="w-[213px] h-[276px] rounded-lg bg-[#E8E8E8] ml-[62px] flex justify-center items-center">
                  <img
                    className="w-[167px] h-[214px]"
                    src={comment.productImage}
                    alt={comment.name}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default UserComments;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import { testimonials } from "./aboutData";



export default () => {
  return (
    <div className="flex flex-col gap-y-12 lg:px-12 lg:pt-12">
      <div className="w-full text-center flex flex-col gap-y-3">
        <h4 className="font-custom-mulish font-semibold text-lg text-custom-aboutcolor">
          Certificates
        </h4>
        <h1 className="text-4xl font-custom-montserrat font-semibold pb-2 border-b-1 border-(--bs-custom-aboutbg)">
          My Achievements
        </h1>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000 }}
          speed={3000}
          // navigation={true}
          // pagination={{ clickable: true }}
          effect="coverflow"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 50 },
            0: { slidesPerView: 1, spaceBetween: 20 },
          }}
        >
          {testimonials.map((slide, index) => (
            <SwiperSlide className="p-4" key={index}>
              <div>
                <div className="flex flex-col gap-y-6 md:gap-y-12 p-3 rounded-lg bg-(--bs-custom-aboutbg)">
                  <img src={slide.image} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

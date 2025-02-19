import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import { Avatar } from "@mui/material";
import { testimonials } from "./aboutData";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default () => {
  return (
    <div className="flex flex-col gap-y-12 lg:px-12 lg:pt-12">
      <div className="w-full text-center flex flex-col gap-y-3">
        <h4 className="font-custom-mulish font-semibold text-lg text-custom-aboutcolor">
          Testimonials
        </h4>
        <h1 className="text-4xl font-custom-montserrat font-semibold pb-2 border-b-1 border-(--bs-custom-aboutbg)">
          From Our Clients
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
                <div className="flex flex-col gap-y-6 md:gap-y-12 py-10 px-3 rounded-lg bg-(--bs-custom-aboutbg)">
                  <div className="text-center md:px-6">
                    <p className="w-full text-xs md:text-sm/8 tracking-(--tracking-2) font-custom-mulish font-normal text-custom-aboutcolor">
                      {slide.comment}
                    </p>
                  </div>
                  <div className="flex items-center justify-between md:px-10 lg:px-4 xl:px-10 px-2">
                    <div className="flex gap-4 items-center">
                      <div>
                        <Avatar
                          alt=""
                          src="src\assets\images\img-7.jpg"
                          sx={{
                            width: { xs: 40, sm: 60, md: 60 ,lg:60},
                            height: { xs: 40, sm: 60, md: 60, lg:60 },
                            filter: "grayscale(1) contrast(1.5) brightness(1)",
                            mixBlendMode: "multiply",
                          }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <div>
                          <h4 className="w-full md:text-lg text-sm text-custom-aboutcolor">
                            {slide.title}
                          </h4>
                        </div>
                        <div>
                          <span className="w-full text-xs md:text-sm font-custom-mulish font-normal tracking-(--tracking-2) text-custom-aboutcolor text-nowrap overflow-x-hidden">
                            {slide.position}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Stack spacing={1}>
                        <Rating
                          key={index}
                          name={`half-rating-read-${index}`}
                          defaultValue={slide.rating}
                          precision={0.5}
                          readOnly
                          sx={{
                            "& .MuiRating-icon": {
                              color: "#999",
                              width: {xs:".9em", md:"1em"},
                            },
                          }}
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

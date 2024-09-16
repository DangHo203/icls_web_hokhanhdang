import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const thumbImages = [
    {
        id: 1,
        image: "https://png.pngtree.com/thumb_back/fw800/background/20230721/pngtree-orange-background-education-a-3d-representation-of-desk-and-book-image_3724222.jpg",
    },
    {
        id: 2,
        image: "https://img.freepik.com/premium-photo/education-concept-3d-book-orange-background-modern-flat-design-isometric-concept_387680-8.jpg",
    },
    {
        id: 3,
        image: "https://cdn.pixabay.com/photo/2021/05/28/09/48/education-6290372_960_720.jpg",
    }

]
export default function ImageSlider() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div className="flex flex-row h-auto md:h-[500px] w-full ">
            <div className="w-full h-[450px]">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                  
                    autoPlay={false}
                    keyBoardControl={true}
                    customTransition="all 0.5s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className="w-full h-full"
                >
                    {thumbImages.map((item,index) => {

                        return (
                            <div key={index} className="w-full h-auto">
                                <img src={item.image} alt="thumb" className="w-full h-[450px] object-cover" />
                            </div>
                        )
                    })}
                </Carousel>          
            </div>
        </div>
    );
}

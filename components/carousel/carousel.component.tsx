import Reviews from "../reviews/reviews.component";
import reviewsData from "../reviews/reviews.data";



function Carousel() {
    return (
        <div className="w-full h-auto">
            <Reviews reviews={reviewsData} />
        </div>
    );
}

export default Carousel;

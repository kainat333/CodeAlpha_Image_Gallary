import ImageGallery from "../ImageGallery"

const Gallery=()=>
{
    const images = [
        { src: '/pictures/g1.jpg', description: 'Beautiful mountain view' },
        { src: '/pictures/g2.jpg', description: 'Sunset over the forest' },
        { src: '/pictures/g3.jpg', description: 'A serene lakeside' },
        { src: '/pictures/g4.jpg', description: 'City skyline at night' },
        { src: '/pictures/g5.jpg', description: 'Peaceful beach' },
        { src: '/pictures/g6.jpg', description: 'Snowy mountain range' },
        { src: '/pictures/g7.jpg', description: 'Vibrant city street' },
        { src: '/pictures/g8.jpg', description: 'Starry night sky' },
      ];
      
 return(
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">


 <ImageGallery images={images}/>
    </div>
 );
}
export default Gallery
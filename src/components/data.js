import srtLogo from '../images/srt-logo.png'
import mustangLogo from '../images/mustang-logo.png'
import chevroletLogo from '../images/chevrolet-logo.png'

const carsDataObjects = [
  {
    id: 1,
    image: "https://d2v1gjawtegg5z.cloudfront.net/uploads/files/000/414/596/original/2023-dodge-challenger-SRT.jpg?1679669118",
    brandLogo: [srtLogo],
    model: "Hellcat",
    vehicleType: "Coupe, rear-wheel-drive, 2-door",
    engineType: "Supercharged V8",
    displacement: "6.2 L",
    power: "707 horsepower",
    torque: "650 lb-ft",
    transmission: "8-speed automatic"
  },
  {
    id: 2,
    image: "https://i0.wp.com/autorrad.com/wp-content/uploads/2023/03/boss42902.webp",
    brandLogo: [mustangLogo],
    model: "Ford Mustang",
    vehicleType: "Coupe, 4-passenger, rear-wheel-drive",
    engineType: "V-8, water-cooled",
    displacement: "428 in³ (7002 cm³)",
    power: "335 hp @ 5200 rpm",
    torque: "440 lb-ft @ 3400 rpm",
    transmission: "3-speed automatic"
  },
  {
    id: 3,
    image: "https://www.drivingline.com/s3/drivingline.prd/cropped/104184/basic_chevelle_drivingline-2.jpg",
    brandLogo: [chevroletLogo],
    model: "Chevrolet",
    vehicleType: "Coupe, rear-wheel-drive, 2-door",
    engineType: "V-8, water-cooled",
    displacement: "454 in³ (7.4 L)",
    power: "Around 450 hp",
    torque: "Around 500 lb-ft",
    transmission: "4-speed manual"
  }
];

export default carsDataObjects;

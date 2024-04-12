import React from 'react'

const Gallery = () => {
  return (
    <>
      <h1 className="text-right text-white font-bold text-5xl p-4">MMA Gallery</h1>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://media.gettyimages.com/id/1229237670/photo/abu-dhabi-united-arab-emirates-in-this-handout-image-provided-by-ufc-robert-whittaker-of.jpg?s=612x612&w=gi&k=20&c=Tln4mvNUf2Cj9Yg6PPuzuV_rB1cIDYB_J5GBkp8xLFo="
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto  rounded-lg"
              src="https://nbcsports.brightspotcdn.com/dims4/default/1e3045f/2147483647/strip/true/crop/2012x1132+2+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F2021-08%2FMakhachev_USA.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2023/07/Ailin-Perez-vs.-Ashlee-Evans-Smith-UFC-on-ESPN-49-1.jpg?w=800&h=600&crop=1"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://sfsmma.com/images/academies/6870/images/1df275a635f9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2019/09/khabib-nurmagomedov-dustin-poirier-ufc-242-18.jpg?w=1000&h=600&crop=1"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2018/10/khabib-nurmagomedov-post-ufc-229.jpg?w=1000&h=600&crop=1"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://addictedmma.files.wordpress.com/2015/09/img_0273.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2015/07/conor-mcgregor-ufc-1893.jpg?w=640"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://www.sacbee.com/entertainment/hp3fsi/picture25021273/alternates/FREE_1140/MC_FIGHTER_14(2)"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://cdn.vox-cdn.com/thumbor/CuDDfvQMGN86VbUFYy_19oQVqas=/0x0:2880x1920/1200x800/filters:focal(1238x4:1698x464)/cdn.vox-cdn.com/uploads/chorus_image/image/66459105/121_Sean_O_Malley_x_Jose_Quinones.0.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://cdn.vox-cdn.com/thumbor/Wp5JrvdrF987FsWXg0vO-SrzW00=/0x0:900x600/1400x1400/filters:focal(0x0:900x600):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/45920032/028_Khabib_Nurmagomedov_vs_Rafael_Dos_Anjos_gallery_post.0.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2020_03/3193186/1200451953_1.JPG"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery
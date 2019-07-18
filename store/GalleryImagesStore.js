const GalleryImagesStore = {
	data : {
		landingImages : ['Limg1', 'Limg2', 'Limg3', 'Limg4'],
		theatreImages : ['Timg1', 'Timg2', 'Timg3', 'Timg4'],
		filmImages : ['Fimg1', 'Fimg2', 'Fimg3', 'Fimg4'],
		otherImages : ['Oimg1', 'Oimg2', 'Oimg3', 'Oimg4'] 
	},
	methods : {
		loadImages(galleryName) {
			console.log('loading');
		}

	}
};

export default GalleryImagesStore;
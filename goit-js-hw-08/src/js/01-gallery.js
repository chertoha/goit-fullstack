import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import template from '../templates/gallery-template.hbs';

import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = template(galleryItems);
galleryRef.innerHTML = galleryMarkup;

const config = {
  overlayOpacity: 0.5,
  captionsData: 'alt',
  captionClass: 'gallery__image-caption',
  captionDelay: 250,
};

new SimpleLightbox('.gallery a', config);

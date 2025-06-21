// Import Node.js modules conditionally to prevent client-side errors
let fs;
let path;
if (typeof window === 'undefined') {
  fs = require('fs');
  path = require('path');
}

let imageDirectory;
if (typeof window === 'undefined') {
  imageDirectory = path.join(process.cwd(), 'public/images');
}

// Available images from public/images directory
const availableImages = [
  '/images/affordable_moving_company_jeddah.jpeg',
  '/images/apartment_relocation_jeddah.jpeg',
  '/images/best_furniture_relocation_jeddah.jpeg',
  '/images/budget_friendly_moving_jeddah.jpeg',
  '/images/commercial_moving_services.jpeg',
  '/images/fast_reliable_movers_jeddah.jpeg',
  '/images/furniture_assembly_jeddah.jpeg',
  '/images/furniture_movers_saudi_arabia.jpeg',
  '/images/furniture_transportation_experts.jpeg',
  '/images/furniture_wrapping_services.jpeg',
  '/images/heavy_furniture_movers.jpeg',
  '/images/house_moving_experts_jeddah.jpeg',
  '/images/international_moving_services.jpeg',
  '/images/interstate_moving_tips.jpeg',
  '/images/local_furniture_moving_service.jpeg',
  '/images/long_distance_moving_saudi.jpeg',
  '/images/moving_boxes_supplies_jeddah.jpeg',
  '/images/moving_company_eastern_province.jpeg',
  '/images/office_relocation_services.jpeg',
  '/images/packing_services_jeddah.jpeg',
  '/images/professional_moving_equipment.jpeg',
  '/images/professional_moving_services_jeddah.jpeg',
  '/images/professional_packing_team.jpeg',
  '/images/reliable_movers_riyadh.jpeg',
  '/images/residential_moving_jeddah.jpeg',
  '/images/same_day_moving_service.jpeg',
  '/images/secure_storage_solutions.jpeg',
  '/images/specialized_furniture_moving.jpeg',
  '/images/storage_solutions_jeddah.jpeg'
];

// Category-based image mapping using available images
const categoryImageMapping = {
  technical: [
    '/images/specialized_furniture_moving.jpeg',
    '/images/professional_moving_equipment.jpeg',
    '/images/furniture_wrapping_services.jpeg'
  ],
  advisory: [
    '/images/professional_packing_team.jpeg',
    '/images/reliable_movers_riyadh.jpeg',
    '/images/best_furniture_relocation_jeddah.jpeg'
  ],
  legal: [
    '/images/office_relocation_services.jpeg',
    '/images/commercial_moving_services.jpeg',
    '/images/professional_moving_services_jeddah.jpeg'
  ],
  educational: [
    '/images/furniture_assembly_jeddah.jpeg',
    '/images/house_moving_experts_jeddah.jpeg',
    '/images/packing_services_jeddah.jpeg'
  ],
  market: [
    '/images/furniture_movers_saudi_arabia.jpeg',
    '/images/long_distance_moving_saudi.jpeg',
    '/images/international_moving_services.jpeg'
  ],
  healthcare: [
    '/images/residential_moving_jeddah.jpeg',
    '/images/apartment_relocation_jeddah.jpeg',
    '/images/local_furniture_moving_service.jpeg'
  ],
  storage: [
    '/images/secure_storage_solutions.jpeg',
    '/images/storage_solutions_jeddah.jpeg',
    '/images/moving_boxes_supplies_jeddah.jpeg'
  ]
};

// Available author images
const availableAuthorImages = [
  '/images/author/Fahad_AlHarbi.png',
  '/images/author/Khalid_AlOtaibi.png',
  '/images/author/Majed_AlQahtani.png',
  '/images/author/Noura_AlDossary.png',
  '/images/author/Turki_AlShehri .png'
];

// Author name to image mapping
const authorImageMapping = {
  'فهد الحربي': '/images/author/Fahad_AlHarbi.png',
  'خالد العتيبي': '/images/author/Khalid_AlOtaibi.png',
  'ماجد القحطاني': '/images/author/Majed_AlQahtani.png',
  'نورة الدوسري': '/images/author/Noura_AlDossary.png',
  'تركي الشهري': '/images/author/Turki_AlShehri .png',
  'سلطان الغامدي': '/images/author/Fahad_AlHarbi.png', // Default fallback
  'محمد الشمري': '/images/author/Majed_AlQahtani.png' // Default fallback
};

/**
 * Get random image from available images based on category
 * @param {string} category - Category to find relevant image for
 * @returns {string} - Path to the image
 */
export function getImageForCategory(category) {
  // Get images for the specific category, fallback to all available images
  const categoryImages = categoryImageMapping[category.toLowerCase()] || availableImages;
  
  // Return a random image from the category
  const randomIndex = Math.floor(Math.random() * categoryImages.length);
  return categoryImages[randomIndex];
}

/**
 * Get author image from available author images
 * @param {string} authorName - Name of the author
 * @returns {string} - Path to the author image
 */
export function getAuthorImage(authorName) {
  // Check if we have a specific mapping for this author
  const mappedImage = authorImageMapping[authorName];
  if (mappedImage) {
    return mappedImage;
  }
  
  // Fallback to a random available author image
  const randomIndex = Math.floor(Math.random() * availableAuthorImages.length);
  return availableAuthorImages[randomIndex];
}

/**
 * Get multiple unique images for a category
 * @param {string} category - Category to find relevant images for
 * @param {number} count - Number of images to return
 * @returns {string[]} - Array of image paths
 */
export function getMultipleImagesForCategory(category, count = 3) {
  // Get images for the specific category, fallback to all available images
  const categoryImages = categoryImageMapping[category.toLowerCase()] || availableImages;
  const selectedImages = [];
  
  // Create a copy to avoid mutating the original array
  const availableImagesCopy = [...categoryImages];
  
  // Select unique images up to the requested count
  for (let i = 0; i < count; i++) {
    if (availableImagesCopy.length === 0) {
      // If we run out of unique images, start over with the full list
      availableImagesCopy.push(...categoryImages);
    }
    
    const randomIndex = Math.floor(Math.random() * availableImagesCopy.length);
    const selectedImage = availableImagesCopy.splice(randomIndex, 1)[0];
    selectedImages.push(selectedImage);
  }
  
  return selectedImages;
}
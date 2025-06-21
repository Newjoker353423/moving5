// Google Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Log the pageview with their URL
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Log specific events happening
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track blog post views
export const trackBlogView = (postTitle, category) => {
  event({
    action: 'view_blog_post',
    category: 'Blog',
    label: postTitle,
    value: category
  });
};

// Track service page views
export const trackServiceView = (serviceName) => {
  event({
    action: 'view_service',
    category: 'Services',
    label: serviceName
  });
};

// Track contact form submissions
export const trackContactSubmission = () => {
  event({
    action: 'submit_contact_form',
    category: 'Contact',
    label: 'Contact Form Submission'
  });
};

// Track phone number clicks
export const trackPhoneClick = () => {
  event({
    action: 'click_phone',
    category: 'Contact',
    label: 'Phone Number Click'
  });
};

// Track email clicks
export const trackEmailClick = () => {
  event({
    action: 'click_email',
    category: 'Contact',
    label: 'Email Click'
  });
};

// Track search usage
export const trackSearch = (searchTerm, resultsCount) => {
  event({
    action: 'search',
    category: 'Search',
    label: searchTerm,
    value: resultsCount
  });
};

// Track file downloads
export const trackFileDownload = (fileName) => {
  event({
    action: 'download',
    category: 'File Download',
    label: fileName
  });
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  event({
    action: 'click_social',
    category: 'Social Media',
    label: platform
  });
}; 
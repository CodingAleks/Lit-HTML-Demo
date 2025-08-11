export function log(message) {
    // const development = process.env.NODE_ENV === 'development';
    // process.env.NODE_ENV is a common way to check the environment in Node.js
    // In a browser environment, you might need to set this variable manually or use a different approach
    
    // Only log messages in development mode
    const development = true; // Set to true for development, false for production
    if (development) {
        if (typeof message === 'object') {
            console.log('[Dev Log]');
            console.log(message);
        } else {
            console.log(`[Dev Log] ${message}`);
        }
    }
}

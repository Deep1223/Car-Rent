export function generateUniqueId() {
    // Generate a timestamp
    const timestamp = new Date().getTime();
    
    // Generate a random number
    const random = Math.floor(Math.random() * 1000000); // You can adjust the range as needed
    
    // Concatenate timestamp and random number to create the unique ID
    const uniqueId = `${timestamp}${random}`;
    
    return uniqueId;
}
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "flooffy-linker";
const FB_CLIENT_EMAIL = "firebase-adminsdk-opqre@flooffy-linker.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCOPNxfu6k9RuTe\n3vaJ3O7471yDhN+oPiHGdYkENYZ6Gv6UMDLZkuXD9lL8DKgaYCPIBs0nxPOOjiZp\nBvfFRQAQVoQpF7RW3yxuHKt+Sxvzcb3etb+3bhqk4rW/VpOfDhCHB82KpAtwpncI\n24l+yy8wv35FfEz65OXBCqMZ1AFKMjHMPJ6FWfxWnupaVy/a1/nvszukJDTN43aF\nzLwpXJONn/e8wBimjWCFYHRrkddHQfLGGmgpE/jV0QKsFx73MeVMjHfSyiBIc+lB\nAynqjqpQYTBcY2nrgrHBfKWaR5nQ2njjPJhKKDC7YN+ipetE+7IoWhmb0pXtwBnE\nWnPy3dVXAgMBAAECggEABOAsM7Hkmr+f383nyJEEtg7Kbo2y9vruQHXN9RF6oxvi\nxySh0Zh5/M4oSRCMAJ90CorFJIxZRvUzdt0wyBfV6Tl1/UydN28eAEZGUKV1d1Ja\nTlSPllOVYTqOPVlT5Rtf0KkhUBPQepOSOAEChRCk9PhTdUFOCDmpcIUTUzLTun3R\n5sKN+/pUJbHGQlBC2gLkb9zO6s59vCWCWKj/HuDvFc0Y1uIcHgsslfr/JLKextDD\nxZkGaY1JtJTKngtl237leSBxTVZtYcYCH+MCxrHmSX7aZw+AghHbghcLLhb5awaK\ns6060cjxV9I60mnpQF9HKt0Stl574WXLtp8TbBnI6QKBgQDBl7x8YcOG59snuzM7\nNM7+05++ZZRWq1lG6droPuhvoeHQY9zdC1MTIP+eN9d/cKC2QM0SyTAQ/6iIgANG\nKziAOqNTtZ7ND4qxpZl/p0sXq3+8ezRKvd/rcoFGlVyjl58P8yO2SMN3zjBYF1jc\nKmFjZbgdBnyFSg9/bF5OL+VHOQKBgQC8FwxTw0KS1JeqOalDpTWoPD2QUZpYyrWp\nH3d3DoOkb3Q84xBb5Sa+iCaXcpnebTd55rMms4KsMi1ay9c75I8/zdUJPt+w3teQ\n2IjBmZ8x2ekn/tLA306cJrFiMdsB2NSnTal+AhqxqQlBcgiNnmNvDOdvADQiizn2\nivJmPXLxDwKBgQCP2qwCFTeQ+JseY/nGxhAGxcSPW7YlzP/zNPUo3Q4lXbqJ+pr1\nWmPp8/xeWop0tYGGzJJWok9oYkGe5NkJ/DXo+ynAm1YcdK8QIMj2VZ70QMkTis2p\nuHw63gR4KacEHTfiRz9DRcCSNxIvc3HhcFCb5sswLlC7TvRDMIjHOsn56QKBgFMg\nTI5oaW/DDRRqT2haB5DGrt6tce10CT0pbv7rJzrxFwohwAUdDTZ/ra6ZM2+eDTqO\nvvaHt2Sq+Gh8Vi9eIAEu0sw3QV1F3zdgu2/0mOrLR8QpVrNu/ar9Xr/rEMOMNM+L\n/zB1dZ62+iQ2ZZlROtjFdzMTf/cUWRWg6uhMmBP5AoGAUS5rl1+8QgJp9JHf60tW\nzXWlwEOJ4ltJ9SOhbO38Q/tvk8exjdh7LP8USBGwGCkZdItgA+5sdgJdP8r0XWKm\nRK6EE0rn5zkX3+eRysce+6itfQqtRFHL15N6WwS4Tt0plUM1+Lz2h4dB1Op9yI9H\n+26KWj7PTQ8ViSRk328L3hs=\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};

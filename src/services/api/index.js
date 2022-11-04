const API = process.env.NEXT_PUBlIC_API_URL;
const VERSION=  process.env.NEXT_PUBLIC_API_VERSION;

const endPoints= {
    auth:{
        login:`${API}/api/${VERSION}/v1/auth/login`,
        profile:`${API}/api/${VERSION}/v1/auth/profile`,
    },
    products:{
        getProduct:(id) => `${API}/api/${VERSION}/products/${id}`,
    },
};

export default endPoints;
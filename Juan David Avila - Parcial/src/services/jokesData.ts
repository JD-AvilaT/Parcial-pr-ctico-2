export async function jokesData(cate:any){
    try {
        const data = await fetch('https://api.chucknorris.io/jokes/random?category='+ cate).then(res => res.json());
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}

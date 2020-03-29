export default {
    up(size){
        const sizes={
            xxs:"350px",
            xs:"450px",
            lg:"1024px"
        }
        return `@media (min-width: ${sizes[size]})`

    },
    down(size){
        const sizes={
            xxs:"350px",
            xs:"450px",
            lg:"1024px"
        }
        return `@media (max-width: ${sizes[size]})`
    }
}
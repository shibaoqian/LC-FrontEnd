const useImageUrl = (folder, name, type) => {
    return new URL(`../assets/${folder}/${name}.${type}`,
        import.meta.url).href
}
export default useImageUrl
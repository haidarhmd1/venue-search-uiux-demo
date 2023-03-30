export const Item = ({ title, description, image }: {image: string; title: string, description: string}) => {

    return(
        <div className="flex pt-4 pb-4">
            <img className="h-20 align-middle rounded-full mr-4" src={image}></img>
            <div className="flex flex-col">
                <h3 style={{fontSize: 18}}>{title}</h3>
                <p style={{fontSize: 12}}>{description}</p>
            </div>
        </div>

    )
}
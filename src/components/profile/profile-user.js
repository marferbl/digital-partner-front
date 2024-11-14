
export const ProfileUser = ({ me }) => {

    const data = [
        {
            "id": "japan",
            "color": "hsl(328, 70%, 50%)",
            "data": [
                {
                    "x": "01/02",
                    "y": 10
                },
                {
                    "x": "02/02",
                    "y": 15
                },
                {
                    "x": "03/02",
                    "y": 9
                },
                {
                    "x": "04/02",
                    "y": 32
                },
                {
                    "x": "05/02",
                    "y": 23
                },
                {
                    "x": " 06/02",
                    "y": 23
                },
                {
                    "x": "07/02",
                    "y": 21
                },
                {
                    "x": "08/02",
                    "y": 14
                },
                {
                    "x": "09/02",
                    "y": 12
                },
                {
                    "x": "10/02",
                    "y": 40
                },
                {
                    "x": "11/02",
                    "y": 31
                },
                {
                    "x": "12/02",
                    "y": 32
                }
            ]
        },
    ]

    return (
        <>
            <div className="flex items-center justify-center w-full min-h-80 rounded-lg" >
                <span className='text-center font-light text-neutral w-1/2'>Bienvenido a tu panel. Por ahora no hay mucho que hacer por aquí…
                    Pero no te preocupes, te dejamos nuestro logo para entretenerte:</span>
            </div >
        </>
    );
}

import { ResponsiveRadar } from '@nivo/radar'

const RadarChart = () => {
    const data = [
        {
            "taste": "fruity",
            "chardonay": 101,
            "carmenere": 60,
            "syrah": 84
        },
        {
            "taste": "bitter",
            "chardonay": 101,
            "carmenere": 24,
            "syrah": 22
        },
        {
            "taste": "heavy",
            "chardonay": 90,
            "carmenere": 24,
            "syrah": 30
        },
        {
            "taste": "strong",
            "chardonay": 113,
            "carmenere": 71,
            "syrah": 32
        },
        {
            "taste": "sunny",
            "chardonay": 37,
            "carmenere": 116,
            "syrah": 111
        }
    ]

    return (
        <div style={{ height: '600px', width: '600px', background:'white' }}>
            <ResponsiveRadar
                data={data}
                keys={['chardonay', 'carmenere', 'syrah']}
                indexBy="taste"
                valueFormat=">-.2f"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                borderColor={{ from: 'color' }}
                gridLabelOffset={36}
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                colors={{ scheme: 'nivo' }}
                blendMode="multiply"
                motionConfig="wobbly"
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: '#999',
                        symbolSize: 12,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}

export default RadarChart
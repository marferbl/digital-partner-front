// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'

export const LineChart = ({ data }) => (
    <div style={{ height: 250 }}>
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left:50 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: -0,
                legendPosition: 'middle'
            }}
            enableGridX={false}
            enableGridY={false}
            colors={{ scheme: 'red_grey' }}
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            areaOpacity={0.25}
            useMesh={true}
            legends={[
            ]}
        />
    </div>
)
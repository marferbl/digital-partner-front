import { useState, useEffect } from 'react';
import { ResponsiveRadar } from '@nivo/radar';

export const MyResponsiveRadar = ({ answers }) => {
    const [chartData, setChartData] = useState([]);

    const blocks = [
        { name: "Calidad del software", range: [1, 5], total: 50 },
        { name: "Funcionalidad", range: [6, 9], total: 40 },
        { name: "Experiencia de usuario", range: [10, 13], total: 40 },
        { name: "Soporte y atención al cliente", range: [14, 18], total: 50 },
        { name: "Relación calidad precio", range: [19, 21], total: 30 },
        { name: "Facilidad de implementación", range: [22, 24], total: 30 },
        { name: "Documentación y recursos", range: [25, 27], total: 30 },
        { name: "Actualizaciones y mejoras", range: [28, 30], total: 30 },
        { name: "Seguridad", range: [31, 33], total: 30 },
        { name: "Satisfacción general y grado de recomendación", range: [34, 36], total: 30 },



    ];

    useEffect(() => {
        if (!answers || !answers.length) return;

        const processedData = blocks.map(block => {
            const { name, range, total } = block;
            const blockAnswers = answers.filter(a => a.order >= range[0] && a.order <= range[1]);
            const sum = blockAnswers.reduce((acc, curr) => acc + curr.answer, 0);
            const pondered = Math.round((sum / total) * 100);

            return {
                taste: name,
                resultado: pondered,
            };
        });

        setChartData(processedData);
    }, [answers]);

    const topBlocks = [...chartData].sort((a, b) => b.resultado - a.resultado).slice(0, 3);
    const worstBlocks = [...chartData].sort((a, b) => a.resultado - b.resultado).slice(0, 3);

    return (
        <div className="h-full w-full">
            {chartData.length > 0 ? (
                <div className='h-[400px]'>
                    <ResponsiveRadar
                        data={chartData}
                        keys={['resultado']}
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
                        legends={[]}
                    />
                </div>
            ) : (
                <span>No hay resultados</span>
            )}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-center pt-10">
                <div>
                    <h2 className="text-xl font-semibold mb-2">🔝 Top 3 bloques mejor valorados</h2>
                    <ul className="space-y-1">
                        {topBlocks.map((block, idx) => (
                            <li key={idx}>
                                {block.taste}: <span className="font-bold">{block.resultado}%</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">⚠️ Top 3 bloques peor valorados</h2>
                    <ul className="space-y-1">
                        {worstBlocks.map((block, idx) => (
                            <li key={idx}>
                                {block.taste}: <span className="font-bold">{block.resultado}%</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

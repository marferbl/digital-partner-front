import { useState, useEffect } from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import classNames from 'classnames';

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

    const sortedBlocks = [...chartData].sort((a, b) => b.resultado - a.resultado);

    const getBarColor = (value) => {
        if (value >= 75) return 'bg-green-300';
        if (value >= 50) return 'bg-yellow-300';
        return 'bg-red-300';
    };

    return (
        <div className="h-full w-full">
            {chartData.length > 0 ? (
                <div className='h-[360px]'>
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

            <div className="w-full pt-10">
                <h2 className="text-2xl font-bold mb-6 mt-3 text-center">Resultados por bloque</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse">
                      
                        <tbody>
                            {sortedBlocks.map((block, idx) => (
                                <tr key={idx} className="border-b text-sm">
                                    <td className="py-3 px-4">{block.taste}</td>
                                    <td className="py-3 px-4 font-bold">{block.resultado}%</td>
                                    <td className="py-3 px-4">
                                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                            <div
                                                className={classNames(
                                                    "h-4 rounded-full",
                                                    getBarColor(block.resultado)
                                                )}
                                                style={{ width: `${block.resultado}%` }}
                                            ></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

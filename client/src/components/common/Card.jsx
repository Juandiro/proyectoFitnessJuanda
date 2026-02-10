// src/components/common/Card.jsx
export default function Card({ title, description, image }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Imagen del Card */}
            {image && (
                <div className="w-full h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Contenido del Card */}
            <div className="p-6">
                {/* Título */}
                {title && (
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {title}
                    </h3>
                )}

                {/* Descripción */}
                {description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

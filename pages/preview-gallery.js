import Link from "next/link";

export default function PreviewGallery() {
  const designs = [
    { id: 1, name: "Sky Blue Clean", description: "Clean blue design with prominent hero image", colors: ["#0369A1", "#E0F2FE", "#FFFFFF"], preview: "/design1" },
    { id: 2, name: "Minimalist Slate", description: "Professional slate design with hero focus", colors: ["#334155", "#F8FAFC", "#FFFFFF"], preview: "/design2" },
    { id: 3, name: "Irish Flag Premium", description: "Green, white, and orange with hero image", colors: ["#169B62", "#FFFFFF", "#FF883E"], preview: "/design3" },
    { id: 4, name: "Warm Orange", description: "Friendly orange design with hero image", colors: ["#EA580C", "#FFF7ED", "#FFFFFF"], preview: "/design4" },
    { id: 5, name: "Professional Orange", description: "Orange accent with hero image focus", colors: ["#FF883E", "#FFFFFF", "#F7FAFC"], preview: "/design5" },
    { id: 6, name: "Fresh Green", description: "Clean green design with hero image", colors: ["#059669", "#ECFDF5", "#FFFFFF"], preview: "/design6" },
    { id: 7, name: "Golden Amber", description: "Warm amber design with hero image", colors: ["#D97706", "#FEF3C7", "#FFFFFF"], preview: "/design7" },
    { id: 8, name: "Teal Modern", description: "Modern teal design with hero image", colors: ["#0891B2", "#ECFEFF", "#FFFFFF"], preview: "/design8" },
    { id: 9, name: "Rose Pink", description: "Elegant rose design with hero image", colors: ["#E11D48", "#FFF1F2", "#FFFFFF"], preview: "/design9" },
    { id: 10, name: "Professional Gray", description: "Clean gray design with hero image", colors: ["#475569", "#F1F5F9", "#FFFFFF"], preview: "/design10" }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent mb-4">Choose Your Design</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">Select from 10 modern homepage designs with hero images.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map(d => (
            <Link key={d.id} href={d.preview} className="block group">
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col h-full cursor-pointer border border-gray-100 group-hover:-translate-y-1 group-hover:scale-[1.02] duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">Design {d.id}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{d.name}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-1">{d.description}</p>
                <div className="flex gap-2 mb-4">
                  {d.colors.map((c, i) => (
                    <span key={i} className="w-7 h-7 rounded-full border-2 border-white shadow" style={{ background: c }}></span>
                  ))}
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-lg font-semibold shadow hover:from-pink-500 hover:to-blue-600 transition">Preview Design →</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

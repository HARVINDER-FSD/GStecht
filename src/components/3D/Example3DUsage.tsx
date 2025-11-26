import { Icon3D } from './Icon3D';

export function Example3DUsage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
      {/* Service Icons */}
      <div className="text-center">
        <Icon3D icon="cube" color="#6366f1" size={120} />
        <h3 className="mt-4 font-semibold">Web Development</h3>
      </div>
      
      <div className="text-center">
        <Icon3D icon="sphere" color="#ec4899" size={120} />
        <h3 className="mt-4 font-semibold">Digital Marketing</h3>
      </div>
      
      <div className="text-center">
        <Icon3D icon="torus" color="#10b981" size={120} />
        <h3 className="mt-4 font-semibold">SEO Services</h3>
      </div>
      
      <div className="text-center">
        <Icon3D icon="cone" color="#f59e0b" size={120} />
        <h3 className="mt-4 font-semibold">App Development</h3>
      </div>
    </div>
  );
}

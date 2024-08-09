import GoogleCalendar from '@/components/Calendar';
import Layout_teacher from '@/components/Layout-teacher';

export default function Home() {
  return (
    <>
        <Layout_teacher>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Calendario de Evaluaciones</h1>
            <GoogleCalendar />
                </div>
            </div>
        </Layout_teacher>
    </>
  );
}

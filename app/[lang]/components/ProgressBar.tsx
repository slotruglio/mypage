export default function ProgressBar({ progress }: { progress: number }) {
    return <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-main-brown h-2.5 rounded-full" style={{ width: progress + "%" }} />
    </div>
}
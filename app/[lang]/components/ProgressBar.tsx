export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="h-2.5 w-full rounded-full bg-gray-700 dark:bg-gray-700">
      <div
        className="h-2.5 rounded-full bg-main-brown"
        style={{ width: progress + '%' }}
      />
    </div>
  );
}

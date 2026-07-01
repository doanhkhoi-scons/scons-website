type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">

      <h2 className="mb-3 text-4xl font-bold">

        {title}

      </h2>

      {subtitle && (
        <p className="text-gray-500">

          {subtitle}

        </p>
      )}

    </div>
  );
}
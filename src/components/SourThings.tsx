export default function SourThings() {
  return (
    <section className="ml-4 w-72 h-72 border-t-sourThingsBorder border-t-sourThings flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 p-2 border-t border-t-sourMute">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                id="sour"
                className="h-6"
                src="/water.svg"
                alt="sourthings icon"
              />
              <a href="https://eksiseyler.com/kanal/tarih">
                <p className="text-xs text-sourHalfMute hover:underline">
                  TARİH
                </p>
              </a>
            </div>
            <div className="flex item-center gap-2">
              <img
                id="icon"
                className="h-4"
                src="/glasses.svg"
                alt="glasses icon"
              />
              <p className="text-sourThingsSeen text-sourHalfMute">4,5k</p>
            </div>
          </div>
          <a href="https://eksiseyler.com/piyanonun-mucidi-hakkinda-fazla-bilgi-olmayan-bartolomeo-cristoforinin-hayat-hikayesi">
            <p className="text-xs text-sourText font-semibold hover:underline">
              Piyanonun Mucidi, Bartolomeo Cristofori'nin Hayat Hikayesi
            </p>
          </a>
        </div>
        <a href="https://eksiseyler.com/piyanonun-mucidi-hakkinda-fazla-bilgi-olmayan-bartolomeo-cristoforinin-hayat-hikayesi">
          <img
            className="h-sourThingsImage min-w-sourThingsImage w-sourThingsImage"
            src="/vnmtFFDBTfW4stNj-638164610047203373.jpg"
            alt="tarih"
          />
        </a>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 p-2 border-t border-t-sourMute">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                id="sour"
                className="h-6"
                src="/water.svg"
                alt="sourthings icon"
              />
              <a href="https://eksiseyler.com/kanal/is-hayati">
                <p className="text-xs text-sourHalfMute hover:underline">
                  İŞ HAYATI
                </p>
              </a>
            </div>
            <div className="flex item-center gap-2">
              <img
                id="icon"
                className="h-4"
                src="/glasses.svg"
                alt="glasses icon"
              />
              <p className="text-sourThingsSeen text-sourHalfMute">8,2k</p>
            </div>
          </div>
          <a href="https://eksiseyler.com/oradaki-birinden-almanya-gocmeyi-dusunen-calisanlar-icin-ne-derece-uygun-bir-ulke">
            <p className="text-xs text-sourText font-semibold hover:underline">
              Oradaki Birinden: Almanya, Göçmeyi Düşünen Çalışanlar İçin Ne
              Derece Uygun Bir Ülke?
            </p>
          </a>
        </div>
        <a href="https://eksiseyler.com/oradaki-birinden-almanya-gocmeyi-dusunen-calisanlar-icin-ne-derece-uygun-bir-ulke">
          <img
            className="h-sourThingsImage min-w-sourThingsImage w-sourThingsImage"
            src="/BcVcsZoAQ3mzWEIr-638163940252575479.jpg"
            alt="iş hayatı"
          />
        </a>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 p-2 border-t border-t-sourMute">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                id="sour"
                className="h-6"
                src="/water.svg"
                alt="sourthings icon"
              />
              <a href="https://eksiseyler.com/kanal/kultur">
                <p className="text-xs text-sourHalfMute hover:underline">
                  KÜLTÜR
                </p>
              </a>
            </div>
            <div className="flex item-center gap-2">
              <img
                id="icon"
                className="h-4"
                src="/glasses.svg"
                alt="glasses icon"
              />
              <p className="text-sourThingsSeen text-sourHalfMute">8,2k</p>
            </div>
          </div>
          <a href="https://eksiseyler.com/kocasi-olen-hintli-kadinlarin-kendisini-kocasiyla-beraber-yakmasi-sati">
            <p className="text-xs text-sourText font-semibold hover:underline">
              Kocası Ölen Hintli Kadınların Kendisini Kocasıyla Beraber Yakması:
              Sati
            </p>
          </a>
        </div>
        <a href="https://eksiseyler.com/kocasi-olen-hintli-kadinlarin-kendisini-kocasiyla-beraber-yakmasi-sati">
          <img
            className="h-sourThingsImage min-w-sourThingsImage w-sourThingsImage"
            src="/GNTu2sDYQvR3ZtJg-638163773962367708.jpg"
            alt="kültür"
          />
        </a>
      </div>
    </section>
  );
}

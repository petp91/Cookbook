# Cookbook

Naklonujte si repozitář
- git clone https://github.com/petp91/Cookbook

Otevřete si dva terminály jeden pro client a druhý pro server

cd client

- npm install
- pro spuštění client použijte: npm start

cd server

- npm install
- pro spuštění server použijte: nodemon index.js


Vytvořte si novou branch z main a pojmenujte ji svým jménem
- git branch <název_větve>
- git checkout <název_větve>


Přidání změn do commitu:
- Zkontrolujte, zda jste ve správné větvi pomocí příkazu git branch
- Zkontrolujte změny, které jste provedli, pomocí příkazu git status
- Přidejte změněné soubory do commitu pomocí příkazu git add. Například, pokud chcete přidat všechny změněné soubory, můžete použít "git add ."

Vytvoření commitu:
- Vytvořte commit, který zahrnuje vaše změny a přidá popis commitu pomocí příkazu git commit. Například, pokud chcete vytvořit commit s popisem "Upraven README soubor", 
můžete použít "git commit -m "Upraveno README souboru"". 

Pushnutí commitu na GitHub:
- Pushněte commit na GitHub pomocí příkazu "git push origin <název_větve>"



DOČASNÁ APLIKACE FORM: 

client: 

Webová aplikace, která slouží k zadávání a ukládání osobních informací uživatelů. Uživatelé mohou přistupovat k aplikaci prostřednictvím prohlížeče a zadávat své osobní údaje v online formuláři. Aplikace využívá knihovny React a React Bootstrap pro vytvoření uživatelského rozhraní a React Router pro řízení navigace mezi různými stránkami aplikace. Backend aplikace je implementován pomocí Node.js a Express a ukládá data do souboru data.json. Data jsou přenášena mezi frontendem a backendem pomocí AJAX volání, která jsou zajištěna pomocí knihovny Axios.

Používám zde props a useState pro propojení parent a child componenty.

props jsou zkratka pro "properties" a umožňují přenášet data z parent komponenty do child komponenty. To umožňuje propojit různé části aplikace a využít jednu komponentu jako modul, který se dá vkládat do jiných částí aplikace. Props jsou předávány jako vlastnosti v JSX syntaxi, například <MyComponent myProp="Hello" />. Props jsou read-only, což znamená, že child komponenta nemůže měnit data, která obdrží od parent komponenty.

useState je funkce v Reactu, která umožňuje uchovávat stav v komponentě a aktualizovat ho. Tato funkce vrací dvojici hodnot - aktuální stav a funkci pro jeho aktualizaci. Při použití useState se vytváří tzv. hook, který je volán v rámci komponenty. Když se stav změní, React znovu vykreslí komponentu s novým stavem. Použití useState umožňuje vytvářet interaktivní aplikace a zobrazovat data v závislosti na stavu komponenty.

Například, v komponentě FormGroup se props používají pro předání vlastností jako controlId, type, label, placeholder, value a onChange. useState se používá v komponentě SubmitForm pro ukládání stavu a aktualizaci dat, když uživatel odesílá formulář. Tento stav se následně používá pro zobrazení potvrzovací zprávy s údaji, které uživatel zadal.

server: 

Tento kód vytváří webovou aplikaci pomocí Node.js a frameworku Express, která poskytuje API pro práci s daty. Konkrétně vytváří dva "endpointy", které jsou přístupné pomocí HTTP metod GET a POST.

Po prvním řádku, kterým se načítají potřebné moduly a balíčky, se vytváří nová instance aplikace pomocí const app = express();. Poté se nastavuje port, na kterém bude aplikace naslouchat, pomocí const PORT = 8080;.

Následující řádky používají body-parser a cors pro analýzu a zpracování HTTP požadavků. app.use(bodyParser.urlencoded({ extended: true })); a app.use(bodyParser.json()); definují middleware pro analýzu těla HTTP požadavků, takže aplikace může zpracovávat data odeslaná v JSON formátu nebo v urlencoded formátu.

app.use(cors()); povoluje CORS pro všechny typy požadavků.

Endpoint /data zpracovává GET požadavky na získání dat z data.json souboru. Tento soubor je čten pomocí Node.js funkce fs.readFile a obsah souboru se odesílá zpět jako JSON pomocí funkce res.json.

Endpoint /data zpracovává POST požadavky na ukládání dat z formuláře. Tento endpoint získá data z těla HTTP požadavku a uloží je do souboru data.json. Pokud soubor již existuje, data se přidají k existujícím datům. Pokud soubor neexistuje, vytvoří se nový soubor s daty. Po uložení dat se odesílá odpověď s HTTP status kódem 200 a textem "Data saved successfully.".

Nakonec se aplikace spustí na definovaném portu pomocí app.listen(PORT, () => { ... });. V konzoli se vypíše informace o tom, že server naslouchá na zadaném portu.

Celkově tento kód tedy vytváří webovou aplikaci, která poskytuje jednoduché API pro ukládání a načítání dat v JSON formátu.

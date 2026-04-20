<script>
    import Topbar from "../topbar.svelte";
    let language = $state("en");
    let localization = {
        "en":{
            "title":"Archives",
            "search":"Search for archives...",
            "pagetitle": "Public Archives",
            "openarchive": "Open Archive"
        },
        "id":{
            "title":"Arsip",
            "search":"Cari arsip...",
            "pagetitle": "Arsip Publik",
            "openarchive":"Buka Arsip"
        }
    };
    $effect(() => {
        const saved = localStorage.getItem("lang");
        if (saved) language = saved;
    });
    let archives = {
        "Studi Sosial":{
            "description":{
                "en":"Social Study is held on "
            },
            "url":"/a/studsos",
        },
        "abcd":{
            "description":"",
            "url":""
        }
    }
    
    function localize(name) {
        return localization[language][name];
    }
    function switchLanguage(){
        if (language == "en"){language = "id"} else {language = "en"};
    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    *{
        font-family: "Atkinson Hyperlegible", sans-serif;
    }
</style>
<Topbar click={switchLanguage}/>
<main class="py-36 px-12 text-zinc-100">
    <h1 class="text-5xl font-bold">{localize("title")}</h1>
    <div class="flex my-4">
        <input type="text" placeholder="{localize("search")}" class="bg-zinc-900 text-zinc-200 p-2 px-4 rounded-xl border-1 border-zinc-500 outline-none w-full">
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {#each Object.keys(archives) as item}
        <a href="{archives[item].url}">
            <div class="p-4 px-6 bg-indigo-500 text-zinc-100 rounded-lg hover:bg-indigo-600">
                <h1 class="font-bold text-2xl lg:text-3xl">{item}</h1>
                <p>{archives[item].description[language]}</p>
            </div>
        </a>
        {/each}
    </div>
</main>
<title>{localize("pagetitle")} - TMC31</title>
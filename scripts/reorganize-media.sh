#!/usr/bin/env bash
set -euo pipefail

echo "==> Starting media reorganization"

ROOT_DIR="$(pwd)"
SRC_DIR="web_komplet_media"
TARGET_DIR="public/images"

if [ ! -d "$SRC_DIR" ]; then
  echo "ERROR: Source directory '$SRC_DIR' not found in repo root: $ROOT_DIR"
  exit 1
fi

mkdir -p "$TARGET_DIR"/hero
mkdir -p "$TARGET_DIR"/apartmany/{cerveny,zluty,zeleny,modry,sedy}
mkdir -p "$TARGET_DIR"/domy/{dum-116,dum-117}
mkdir -p "$TARGET_DIR"/okoli
mkdir -p "$TARGET_DIR"/logo
mkdir -p "$TARGET_DIR"/badges

rename_seq() {
  local source_dir="$1"
  local target_dir="$2"
  local prefix="$3"

  if [ ! -d "$source_dir" ]; then
    echo "WARN: Missing directory $source_dir"
    return
  fi

  local i=1
  find "$source_dir" -maxdepth 1 -type f | sort | while read -r f; do
    ext="${f##*.}"
    ext="$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')"
    printf -v new_name "%s-%02d.%s" "$prefix" "$i" "$ext"
    git mv "$f" "$target_dir/$new_name"
    i=$((i + 1))
  done
}

echo "==> Renaming apartments"
rename_seq "$SRC_DIR/_Apartmany/Cerveny" "$TARGET_DIR/apartmany/cerveny" "cerveny"
rename_seq "$SRC_DIR/_Apartmany/zluty" "$TARGET_DIR/apartmany/zluty" "zluty"
rename_seq "$SRC_DIR/_Apartmany/zeleny" "$TARGET_DIR/apartmany/zeleny" "zeleny"
rename_seq "$SRC_DIR/_Apartmany/modry" "$TARGET_DIR/apartmany/modry" "modry"
rename_seq "$SRC_DIR/_Apartmany/Sedy" "$TARGET_DIR/apartmany/sedy" "sedy"

echo "==> Moving house 116"
git mv "$SRC_DIR/_domy/dum-116/116_Pudorys_1patro.jpg" "$TARGET_DIR/domy/dum-116/dum-116-pudorys-1patro.jpg"
git mv "$SRC_DIR/_domy/dum-116/116_Pudorys_prizemi.jpg" "$TARGET_DIR/domy/dum-116/dum-116-pudorys-prizemi.jpg"
git mv "$SRC_DIR/_domy/dum-116/Dum116_01_HERO.jpeg" "$TARGET_DIR/hero/hero-borova-lada.jpeg"
git mv "$SRC_DIR/_domy/dum-116/Dum116_02.jpeg" "$TARGET_DIR/domy/dum-116/dum-116-02.jpeg"
git mv "$SRC_DIR/_domy/dum-116/Dum116_03.jpeg" "$TARGET_DIR/domy/dum-116/dum-116-03.jpeg"
git mv "$SRC_DIR/_domy/dum-116/Dum116_04.JPG" "$TARGET_DIR/domy/dum-116/dum-116-04.jpg"
git mv "$SRC_DIR/_domy/dum-116/Dum116_05.jpeg" "$TARGET_DIR/domy/dum-116/dum-116-05.jpeg"
git mv "$SRC_DIR/_domy/dum-116/Dum116_07.jpg" "$TARGET_DIR/domy/dum-116/dum-116-07.jpg"
git mv "$SRC_DIR/_domy/dum-116/Dum116_08.jpg" "$TARGET_DIR/domy/dum-116/dum-116-08.jpg"
git mv "$SRC_DIR/_domy/dum-116/Dum116_09.jpeg" "$TARGET_DIR/domy/dum-116/dum-116-09.jpeg"
git mv "$SRC_DIR/_domy/dum-116/Dum116_10.jpeg" "$TARGET_DIR/domy/dum-116/dum-116-10.jpeg"

echo "==> Moving house 117"
git mv "$SRC_DIR/_domy/dum-117/117_Pudorys_1patro.jpg" "$TARGET_DIR/domy/dum-117/dum-117-pudorys-1patro.jpg"
git mv "$SRC_DIR/_domy/dum-117/117_Pudorys_prizemi.jpg" "$TARGET_DIR/domy/dum-117/dum-117-pudorys-prizemi.jpg"
git mv "$SRC_DIR/_domy/dum-117/Dum117_01.jpg" "$TARGET_DIR/domy/dum-117/dum-117-01.jpg"
git mv "$SRC_DIR/_domy/dum-117/Dum117_Pracka.jpeg" "$TARGET_DIR/domy/dum-117/dum-117-pracka.jpeg"

echo "==> Moving logos"
git mv "$SRC_DIR/_logo/CernyVlkLogo.png" "$TARGET_DIR/logo/cerny-vlk-logo.png"
git mv "$SRC_DIR/_logo/CernyVlk_Official2303_2.svg" "$TARGET_DIR/logo/cerny-vlk-logo-official.svg"
git mv "$SRC_DIR/_logo/CernyVlk_Official_logo2303_square.svg" "$TARGET_DIR/logo/cerny-vlk-logo-official-square.svg"

echo "==> Moving other assets"
git mv "$SRC_DIR/_ostatni/MapaCR.jpg" "$TARGET_DIR/okoli/mapa-cr.jpg"
git mv "$SRC_DIR/_ostatni/Digital-Award-TRA-2025.png" "$TARGET_DIR/badges/digital-award-tra-2025.png"

echo "==> Done"
echo
echo "Check results with:"
echo "  git status"
echo "  find public/images -type f | sort"

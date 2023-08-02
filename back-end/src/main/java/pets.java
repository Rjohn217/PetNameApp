import io.micrometer.common.lang.NonNull;

public class pets {
    @NonNull
    public String breed;

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String toString() {
        return "pets{" +
                "breed='" + breed + '\'' +
                '}';
    }
}
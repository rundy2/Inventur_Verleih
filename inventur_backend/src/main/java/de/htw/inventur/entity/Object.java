package de.htw.inventur.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import de.htw.inventur.repository.SectionRepository;
import org.springframework.data.annotation.Transient;


@Entity
public class Object {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int sectionId;
    private String sectionName;

    private int storageId;
    private String storageName;

    private int roomId;
    private String roomName;

    private String name;

    private int state;

    private int cond;

    private int isbn;

    private Date resDate;

    private Date backDate;

    private Date lendDate;

    private String lendBy;

    public Object() {}

    public Object(int sectionId, String sectionName, int storageId, String storageName, int roomId, String roomName, String name, int state, int cond, Date resDate, Date backDate, Date lendDate, String lendBy) {
        this.sectionId = sectionId;
        this.sectionName = sectionName;
        this.storageId = storageId;
        this.storageName = storageName;
        this.roomId = roomId;
        this.roomName = roomName;
        this.name = name;
        this.state = state;
        this.cond = cond;
        this.resDate = resDate;
        this.backDate = backDate;
        this.lendDate = lendDate;
        this.lendBy = lendBy;
        this.isbn=0;
    }

    public Object(String name, int sectionId, int storageId, int roomId) {
        this.name = name;
        this.sectionId = sectionId;
        this.storageId = storageId;
        this.roomId = roomId;
        this.state = 1;
        this.cond = 100;
        this.resDate = null;
        this.backDate = null;
        this.lendDate = null;
        this.isbn=0;
    }

    public int getIsbn() {
        return isbn;
    }

    public void setIsbn(int isbn) {
        this.isbn = isbn;
    }

    public String getSectionName() {
        return sectionName;
    }

    public void setSectionName(String sectionName) {
        this.sectionName = sectionName;
    }

    public String getStorageName() {
        return storageName;
    }

    public void setStorageName(String storageName) {
        this.storageName = storageName;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public int getStorageId() { return storageId; }

    public void setStorageId(int storageId) {
        this.storageId = storageId;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public int getSectionId() {
        return sectionId;
    }

    public void setSectionId(int sectionId) {
        this.sectionId = sectionId;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public int getCond() {
        return cond;
    }

    public void setCond(int condition) {
        this.cond = condition;
    }

    public Date getResDate() {
        return resDate;
    }

    public void setResDate(Date resDate) {
        this.resDate = resDate;
    }

    public Date getBackDate() {
        return backDate;
    }

    public void setBackDate(Date backDate) {
        this.backDate = backDate;
    }

    public Date getLendDate() {
        return lendDate;
    }

    public void setLendDate(Date lendDate) {
        this.lendDate = lendDate;
    }

    public String getLendBy(){return lendBy;}

    public void setLendBy(String lendBy){this.lendBy = lendBy;}

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
